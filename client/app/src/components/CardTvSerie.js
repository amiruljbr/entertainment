import React from 'react';

function CardTvSerie (props) {

  return (
    <>
      <div className="card">
        <img className="card-img-top" src={props.tvSerie.poster_path} alt={'Cover of ' + props.tvSerie.title}/>
        <div className="card-body">
          <h5 className="card-title">{props.tvSerie.title}</h5>
          <p className="card-text">Overview : {props.tvSerie.overview}</p>
          <p className="card-text">Popularity: {props.tvSerie.popularity}</p>
          <p className="card-text">Tags: {props.tvSerie.tags.map((tag)=>{
            return (
              <button className="btn btn-secondary mr-1 ml-1 mt-1 mb-1">{tag}</button>
            )
          })}</p>
        </div>
      </div>
    </>
  )
}

export default CardTvSerie;