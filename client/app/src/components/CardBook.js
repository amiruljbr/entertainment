import React from 'react';
import { useDispatch } from 'react-redux';
import { postCart } from '../store/actions/cartAction.js';


export default function CardBook(props) {
  const dispatch = useDispatch();

  function addToCart () {
    dispatch(postCart(props.book));
    console.log('add to cart process')
  }

  return (
    <>
      <div className="card">
        <img className="card-img-top" src={props.book.cover} alt={'Cover of ' + props.book.name}/>
        <div className="card-body">
          <h5 className="card-title">{props.book.name}</h5>
          <p className="card-text">Author: {props.book.author}</p>
          <p className="card-text">Price: Rp {new Intl.NumberFormat().format(props.book.price)}</p>
          <p className="card-text">{props.book.description}</p>
          {props.showButton? <button className="button btn-primary" onClick={addToCart}>Buy this Book</button> : ''}            
        </div>
      </div>
    </>
  )
}
