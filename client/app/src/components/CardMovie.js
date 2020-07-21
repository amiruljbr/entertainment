import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_MOVIE } from '../graphql/queries/movie';

function CardMovie (props) {
  const [checkFav, setCheckFav] = useState(true);
  const history = useHistory();
  const [deleteMovie] = useMutation(DELETE_MOVIE);

  // useEffect(() => {
  //   let found = favorites.findIndex(movie => {
  //       return movie.CountryCode === props.movie.CountryCode;
  //   });
  //   setCheckFav(found > -1);
  // }, [favorites, props.movie.CountryCode])

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
  }

  function removeFromFavorites(movie) {
    console.log(`remove ${movie.title} from favorites`);
  }

  return (
    <>
      <div className="card">
        <img className="card-img-top" src={props.movie.poster_path} alt={'Cover of ' + props.movie.title}/>
        <div className="card-body">
          <h5 className="card-title">{props.movie.title}</h5>
          <p className="card-text">Overview : {props.movie.overview}</p>
          <p className="card-text">Popularity: {props.movie.popularity}</p>
          <p className="card-text">Tags: {props.movie.tags}</p>
          <button onClick={() => onClick(props.movie._id)} className="button btn-primary mr-1 ml-1 mt-1 mb-1">View Detail</button>
          <button onClick={() => onClickEdit(props.movie._id)} className="button btn-secondary mr-1 ml-1 mt-1 mb-1">Edit</button>
          <button onClick={() => onClickDelete(props.movie._id)} className="button btn-danger mr-1 ml-1 mt-1 mb-1">Delete</button>
          {checkFav? <button onClick={() => addToFavorites(props.movie)} className="button btn-success mr-1 ml-1 mt-1 mb-1">Add To Favorites</button>: <button onClick={() => removeFromFavorites(props.movie)} className="button btn-danger mr-1 ml-1">Remove From Favorites</button> }          
        </div>
      </div>
    </>
  )
}

export default CardMovie;