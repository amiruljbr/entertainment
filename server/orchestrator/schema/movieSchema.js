const axios = require('axios');
const Redis = require('ioredis');
const redis = new Redis();
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Movie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  input InputMovie {
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    tags: [String]
  }

  extend type Query {
    getMovies : [Movie]
    getMovie (id: ID) : Movie
  }

  extend type Mutation {
    addMovie (newMovie: InputMovie) : Movie

    updateMovie (
      id: ID,
      newMovie: InputMovie
    ) : Movie

    deleteMovie (
      id: ID
    ) : String
  }
`;


const resolvers = {
  Query : {
    movies : async() => {
      const movies = await redis.get('movies');
      if (movies) {
        return JSON.parse(movies);
      } else {
        try {
          const { data } = await axios.get('http://localhost:3001/movies');
          redis.set('movies', JSON.stringify(data));
          return data;
        } catch (error) {
          console.log(error);
        }
      }
    },
    movie : (parent, args, context, info) => {
      const id = args.id
      return axios({
        url : `http://localhost:3001/movies/${id}`,
        method : "get"
      })
      .then(({data}) => {
        return data
      })
      .catch(console.log)
    }
  },

  Mutation: {
    addMovie : (parent, args, context, info) => {
      const { title, overview, poster_path, popularity, tags } = args.newMovie;
      return axios.post(`http://localhost:3001/movies`, { 
        title, overview, poster_path, popularity, tags
      })
      .then(({ data }) => {
        redis.del('movies');
        return data;
      })
      .catch(console.log)
    },

    updateMovie : (parent, args, context, info) => {
      const id = args.id
      const { title, overview, poster_path, popularity, tags } = args.newMovie;
      return axios.put(`http://localhost:3001/movies/${id}`, { 
        title, overview, poster_path, popularity, tags
      })
      .then(({ data }) => {
        redis.del('movies');
        return data;
      })
      .catch(console.log)
    },

    deleteMovie : (parent, args, context, info) => {
      const id = args.id;
      return axios.delete(`http://localhost:3001/movies/${id}`)
      .then(({ data }) => {
        redis.del('movies');
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