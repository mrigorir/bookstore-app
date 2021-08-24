import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <ul>
      {books.map((book) => {
        const { id, title, author } = book;
        return <Book key={id} id={id} title={title} author={author} />;
      })}
    </ul>
  );
};

export default BookList;
