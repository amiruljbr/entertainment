import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../graphql/queries/movie'
import CardMovie from '../components/CardMovie'

export default function Movies() {
  const { loading, error, data: movies } = useQuery(GET_MOVIES)
  if (loading) {
    return (
      <div>
        Loading ...
      </div>
    );
  };
  return (
    <div className="container">
      <h1>All Movies</h1>
      <div className="card-columns">
        {movies.getMovies.map((movie)=>{
          return (
            <CardMovie key={movie._id} movie={movie}></CardMovie>
          )
        })}
      </div>
    </div>
  )
}
