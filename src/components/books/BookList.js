import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksAction } from '../../redux/books/books';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction());
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          category={book.category}
        />
      ))}
    </ul>
  );
};

export default BookList;
