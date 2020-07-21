import { gql } from '@apollo/client';

export const GET_TVSERIES = gql`
  query {
    getTvSeries {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const GET_TVSERIE = gql`
  query ($id: ID) {
    getTvSerie(id: $id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const ADD_TVSERIE = gql`
  mutation ($newTvSerie: InputTvSerie) {
    addTvSerie(newTvSerie: $newTvSerie) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const UPDATE_TVSERIE = gql`
  mutation ($id: ID, $newTvSerie: InputTvSerie) {
    addTvSerie(id: $id, newTvSerie: $newTvSerie) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const DELETE_TVSERIE = gql`
  mutation($id: ID) {
    deleteTvSerie(id: $id)
  }
`;