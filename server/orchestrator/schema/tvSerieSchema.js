const axios = require('axios');
const Redis = require('ioredis');
const redis = new Redis();
const { gql } = require('apollo-server');

const typeDefs = gql`
  type TvSerie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  input InputTvSerie {
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    tags: [String]
  }

  extend type Query {
    getTvSeries : [TvSerie]
    getTvSerie (id: ID) : TvSerie
  }

  extend type Mutation {
    addTvSerie (newTvSerie: InputTvSerie) : TvSerie

    updateTvSerie (
      id: ID,
      newTvSerie: InputTvSerie
    ) : TvSerie

    deleteTvSerie (
      id: ID
    ) : String
  }
`;


const resolvers = {
  Query : {
    tvSeries : async() => {
      const tvSeries = await redis.get('tvSeries');
      if (tvSeries) {
        return JSON.parse(tvSeries);
      } else {
        try {
          const { data } = await axios.get('http://localhost:3002/tv');
          redis.set('tvSeries', JSON.stringify(data));
          return data;
        } catch (error) {
          console.log(error);
        }
      }
    },
    movie : (parent, args, context, info) => {
      const id = args.id
      return axios({
        url : `http://localhost:3002/tv/${id}`,
        method : "get"
      })
      .then(({data}) => {
        return data
      })
      .catch(console.log)
    }
  },

  Mutation: {
    addTvSerie : (parent, args, context, info) => {
      const { title, overview, poster_path, popularity, tags } = args.newTvSerie;
      return axios.post(`http://localhost:3002/tv`, { 
        title, overview, poster_path, popularity, tags
      })
      .then(({ data }) => {
        redis.del('tvSeries');
        return data;
      })
      .catch(console.log)
    },

    updateTvSerie : (parent, args, context, info) => {
      const id = args.id
      const { title, overview, poster_path, popularity, tags } = args.newTvSerie;
      return axios.put(`http://localhost:3002/tv/${id}`, { 
        title, overview, poster_path, popularity, tags
      })
      .then(({ data }) => {
        redis.del('tvSeries');
        return data;
      })
      .catch(console.log)
    },

    deleteTvSerie : (parent, args, context, info) => {
      const id = args.id;
      return axios.delete(`http://localhost:3002/tv/${id}`)
      .then(({ data }) => {
        redis.del('tvSeries');
        return data;
      })
      .catch(console.log)
    }

  }
}

module.exports = {
  typeDefs,
  resolvers
}