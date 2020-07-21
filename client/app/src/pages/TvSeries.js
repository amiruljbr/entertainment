import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TVSERIES } from '../graphql/queries/tvSerie'

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
      {JSON.stringify(tvSeries)}
      {/* <div className="card-columns">
        {books.map((book)=>{
          return (
            <CardBook key={book.id} book={book} showButton={true}></CardBook>
          )
        })}
      </div> */}
    </div>
  )
}
