import { ApolloClient, InMemoryCache } from '@apollo/client';
import { fav } from './queries/favorite';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        favorites: {
          read: () => {
            return fav();
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri: 'http://54.179.152.166:4000',
  cache
});

export default client;