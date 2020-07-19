const { ApolloServer, gql, makeExecutableSchema } = require("apollo-server")
const movieSchema = require("./schema/movieSchema")
const tvSerieSchema = require("./schema/tvSerieSchema")


const typeDefs = gql`
  type Query
  type Mutation
`;

const schema = makeExecutableSchema({
  typeDefs : [
    typeDefs,
    movieSchema.typeDefs,
    tvSerieSchema.typeDefs
  ],
  resolvers : [
    movieSchema.resolvers,
    tvSerieSchema.resolvers
  ]
})

const server = new ApolloServer({
  schema
})

server.listen().then(({ url }) => {
  console.log(` Server ready at ${url}`);
});