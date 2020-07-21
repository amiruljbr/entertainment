import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../graphql/queries/movie'
import CardMovie from '../components/CardMovie'

export default function Favorites() {
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
      <h1>List Favorites: </h1>
      {/* {JSON.stringify(movies.getMovies)} */}
      <div className="card-columns">
        {movies.getMovies.map((movie)=>{
          return (
            <CardMovie key={movie._id} movie={movie} showButton={true}></CardMovie>
          )
        })}
      </div>
    </div>
  )
}
