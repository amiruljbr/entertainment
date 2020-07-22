import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_MOVIE } from '../graphql/queries/movie'

export default function DetailMovie() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, { variables: { id }});

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
      <div className="card">
        <img className="card-img-top" src={data.getMovie.poster_path} alt={'Poster of ' + data.getMovie.title}/>
        <div className="card-body">
          <h5 className="card-title">{data.getMovie.title}</h5>
          <p className="card-text">overview: {data.getMovie.overview}</p>
          <p className="card-text">popularity: {data.getMovie.popularity}</p>
          <p className="card-text">Tags: {data.getMovie.tags.map((tag)=>{
            return (
              <button className="btn btn-secondary mr-1 ml-1 mt-1 mb-1">{tag}</button>
            )
          })}</p>        
        </div>
      </div>
    </div>
  )
}
