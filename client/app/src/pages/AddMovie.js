import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_MOVIE, GET_MOVIES } from '../graphql/queries/movie';
import { useHistory } from 'react-router-dom';

export default function AddMoviePage () {
  const history = useHistory();
  const [addMovie] = useMutation(ADD_MOVIE, { refetchQueries: [{ query: GET_MOVIES }]});
  const [input, setInput] = useState({
    title: '',
    overview: '',
    poster_path: '',
    popularity: '',
    tags: ''
  })

  function onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const newMovie = {
      ...input,
      [name]:value
    }
    setInput(newMovie);
  }

  function onSubmit(event) {
    event.preventDefault();
    addMovie({
      variables: {
        newMovie: {
          title: input.title,
          overview: input.overview, 
          poster_path: input.poster_path, 
          popularity: parseFloat(input.popularity), 
          tags: input.tags.split(',')
        }
      }
    })
    history.push('/movies')
  }

  return (
    <div className="container">
      <h1>Add New Movie</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>title:</label>
          <input value={input.title} name="title" type="text" className="form-control" placeholder="title" required onChange={onChange}/>
        </div>
        <div className="form-group">
          <label>overview:</label>
          <textarea value={input.overview} name="overview" type="text" className="form-control" placeholder="overview" required onChange={onChange}/>
        </div>
        <div className="form-group">
          <label>poster_path:</label>
          <input value={input.poster_path} name="poster_path" type="text" className="form-control" placeholder="poster_path" required onChange={onChange}/>
        </div>
        <div className="form-group">
          <label>popularity:</label>
          <input value={input.popularity} name="popularity" type="text" className="form-control" placeholder="popularity" required onChange={onChange}/>
        </div>
        <div className="form-group">
          <label>tags:</label>
          <input value={input.tags} name="tags" type="text" className="form-control" placeholder="Enter tags" required onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
