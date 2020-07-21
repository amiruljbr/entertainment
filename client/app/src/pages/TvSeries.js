import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TVSERIES } from '../graphql/queries/tvSerie'

export default function Home() {
  const { loading, error, data: tvSeries } = useQuery(GET_TVSERIES)

  return (
    <div className="container">
      <h1>All Movies</h1>
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
