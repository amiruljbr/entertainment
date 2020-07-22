import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_MOVIE, UPDATE_MOVIE, GET_MOVIES } from '../graphql/queries/movie'

export default function EditMovie () {
  const { id } = useParams();
  const history = useHistory();
  const [updateMovie] = useMutation(UPDATE_MOVIE, { refetchQueries: [{ query: GET_MOVIES }]});
  const { loading, error, data } = useQuery(GET_MOVIE, { variables: { id }});
  const [input, setInput] = useState({
    title: '',
    overview: '',
    poster_path: '',
    popularity: '',
    tags: []
  })

  useEffect(() => {
    if (!loading) {
      let movie = { ...data.getMovie };
      delete movie._id;
      delete movie.__typename;
      setInput(movie);
    }
  }, [loading, data]);

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
    updateMovie({
      variables: {
        id: id,
        newMovie: {
          title: input.title,
          overview: input.overview, 
          poster_path: input.poster_path, 
          popularity: parseFloat(input.popularity), 
          tags: input.tags
        }
      }
    })
    history.push('/movies')
  }

  return (
    <div className="container">
      <h1>Edit Movie</h1>
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
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  )
}
