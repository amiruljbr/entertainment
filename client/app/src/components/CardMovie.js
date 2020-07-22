import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_MOVIE, GET_MOVIES } from '../graphql/queries/movie';
import { GET_FAVORITES, fav } from '../graphql/queries/favorite';

function CardMovie (props) {
  const history = useHistory();
  const [deleteMovie] = useMutation(DELETE_MOVIE, { refetchQueries: [{ query: GET_MOVIES }]});
  const { loading, data } = useQuery(GET_FAVORITES);
  if (loading) {
    return (
      <div>
        Loading ...
      </div>
    );
  };

  function onClick(id){
    history.push(`/movies/${id}`)
  }

  function onClickEdit(id){
    history.push(`/movies/${id}/edit`)
  }

  function onClickDelete(id){
    deleteMovie({
      variables: {
        id
      }
    })
  }

  function addToFavorites(movie) {
    console.log(`add ${movie.title} to favorites`);
    let favorites = data.favorites;
    fav([...favorites, movie])
  }

  return (
    <>
      <div className="card">
        <img className="card-img-top" src={props.movie.poster_path} alt={'Cover of ' + props.movie.title}/>
        <div className="card-body">
          <h5 className="card-title">{props.movie.title}</h5>
          <p className="card-text">Overview : {props.movie.overview}</p>
          <p className="card-text">Popularity: {props.movie.popularity}</p>
          <p className="card-text">Tags: {props.movie.tags.map((tag)=>{
            return (
              <button className="btn btn-secondary mr-1 ml-1 mt-1 mb-1">{tag}</button>
            )
          })}</p>
          <hr/>
          <button onClick={() => onClick(props.movie._id)} className="button btn-primary mr-1 ml-1 mt-1 mb-1">View Detail</button>
          <button onClick={() => onClickEdit(props.movie._id)} className="button btn-secondary mr-1 ml-1 mt-1 mb-1">Edit</button>
          <button onClick={() => onClickDelete(props.movie._id)} className="button btn-danger mr-1 ml-1 mt-1 mb-1">Delete</button>
          {<button onClick={() => addToFavorites(props.movie)} className="button btn-success mr-1 ml-1 mt-1 mb-1">Add To Favorites</button>}          
        </div>
      </div>
    </>
  )
}

export default CardMovie;