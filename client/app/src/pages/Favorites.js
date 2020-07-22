import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FAVORITES } from '../graphql/queries/favorite'
import CardMovie from '../components/CardMovie'

export default function Favorites() {
  const { loading, error, data: movies } = useQuery(GET_FAVORITES)
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
      <div className="card-columns">
        {movies.favorites.map((movie)=>{
          return (
            <CardMovie key={movie._id} movie={movie} showButton={true}></CardMovie>
          )
        })}
      </div>
    </div>
  )
}
