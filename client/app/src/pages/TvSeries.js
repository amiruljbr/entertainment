import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_TV_SERIES = gql`
  query {
    tvSeries {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export default function Home() {
  const { loading, error, data: tvSeries } = useQuery(GET_TV_SERIES)

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
