import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function CardTvSerie (props) {
  const history = useHistory();

  return (
    <>
      <div className="card">
        <img className="card-img-top" src={props.tvSerie.poster_path} alt={'Cover of ' + props.tvSerie.title}/>
        <div className="card-body">
          <h5 className="card-title">{props.tvSerie.title}</h5>
          <p className="card-text">Overview : {props.tvSerie.overview}</p>
          <p className="card-text">Popularity: {props.tvSerie.popularity}</p>
          <p className="card-text">Tags: {props.tvSerie.tags}</p>
        </div>
      </div>
    </>
  )
}

export default CardTvSerie;