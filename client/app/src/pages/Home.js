import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { GET_TVSERIES } from '../graphql/queries/tvSerie'
import { GET_MOVIES } from '../graphql/queries/movie'
import CardTvSerie from '../components/CardTvSerie';


export default function Home() {
  const { loading: loadingTv, error: errorTv, data: tvSeries } = useQuery(GET_TVSERIES)
  const { loading: loadingMovie, error: errorMovie , data: movies } = useQuery(GET_MOVIES)

  if (loadingTv || loadingMovie) {
    return (
      <div>
        Loading ...
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Home</h1>
      <div className="card-columns">
        {movies.getMovies.map((tvSerie)=>{
          return (
            <CardTvSerie key={tvSerie._id} tvSerie={tvSerie}></CardTvSerie>
          )
        })}

        {tvSeries.getTvSeries.map((tvSerie)=>{
          return (
            <CardTvSerie key={tvSerie._id} tvSerie={tvSerie}></CardTvSerie>
          )
        })}
      </div>
    </div>
  )
}
