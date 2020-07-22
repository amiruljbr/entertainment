import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../graphql/queries/movie'
import CardMovie from '../components/CardMovie';
import { useHistory } from 'react-router-dom'

export default function Movies() {
  const history = useHistory();
  const { loading, error, data: movies } = useQuery(GET_MOVIES)
  if (loading) {
    return (
      <div>
        Loading ...
      </div>
    );
  };
  if (error) {
    return (
      <div>
        Error ...
      </div>
    );
  };
  return (
    <div className="container">
      <h1>All Movies</h1>
      <button onClick={() => { history.push('/movies/add')}} className="button btn-primary mr-1 ml-1 mt-1 mb-1">Add Movie</button>
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
