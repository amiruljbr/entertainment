import { gql, makeVar } from '@apollo/client';

export const GET_FAVORITES = gql`
  query {
    favorites @client 
  }
`;

export const fav = makeVar([]);