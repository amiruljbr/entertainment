import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TVSERIES } from '../graphql/queries/tvSerie'
import CardTvSerie from '../components/CardTvSerie';

export default function TvSeries() {
  const { loading, error, data: tvSeries } = useQuery(GET_TVSERIES)
  if (loading) {
    return (
      <div>
        Loading ...
      </div>
    );
  };
  return (
    <div className="container">
      <h1>All TV Series</h1>
      <div className="card-columns">
        {tvSeries.getTvSeries.map((tvSerie)=>{
          return (
            <CardTvSerie key={tvSerie._id} tvSerie={tvSerie}></CardTvSerie>
          )
        })}
      </div>
    </div>
  )
}
