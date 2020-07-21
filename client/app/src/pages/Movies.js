import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIES = gql`
  query {
    movies {
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
  const { loading, error, data: movies } = useQuery(GET_MOVIES)

  return (
    <div className="container">
      <h1>All Movies</h1>
      {JSON.stringify(movies)}
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
