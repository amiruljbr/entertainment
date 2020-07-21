import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../graphql/queries/movie'

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
