import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// // import { getBooks } from '../store/actions/bookAction.js';
// import CardBook from '../components/CardBook.js';

export default function Home() {
  // const dispatch = useDispatch();
  // const books = useSelector(state => state.bookReducer.books);

  // useEffect(() => {
  //   dispatch(getBooks())
  // }, [dispatch])

  return (
    <div className="container">
      <h1>Halaman Home</h1>
      <div className="card-columns">
        {/* {books.map((book)=>{
          return (
            <CardBook key={book.id} book={book} showButton={true}></CardBook>
          )
        })} */}
      </div>
    </div>
  )
}
