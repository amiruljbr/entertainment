import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../store/actions/bookAction.js';

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    console.log(bookId)
    dispatch(getBook(bookId))
  }, [dispatch, bookId])

  return (
    <div className="container">
      <div className="card">
        <img className="card-img-top" src={book.cover} alt={'Cover of ' + book.name}/>
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          <p className="card-text">Author: {book.author}</p>
          <p className="card-text">Price: Rp {new Intl.NumberFormat().format(book.price)}</p>
          <p className="card-text">{book.description}</p>            
        </div>
      </div>
    </div>
  )
}
