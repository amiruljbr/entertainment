import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query {
    getMovies {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const GET_MOVIE = gql`
  query ($id: ID) {
    getMovie(id: $id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation ($newMovie: InputMovie) {
    addMovie(newMovie: $newMovie) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const UPDATE_MOVIE = gql`
  mutation ($id: ID, $newMovie: InputMovie) {
    updateMovie(id: $id, newMovie: $newMovie) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const DELETE_MOVIE = gql`
  mutation($id: ID) {
    deleteMovie(id: $id)
  }
`;