import React from 'react';
import mockBooks from './mockBooks';
import Book from './Book';

const BookList = () => (
  <ul>
    {mockBooks.map((book) => {
      const { id, title, author } = book;
      return <Book key={id} title={title} author={author} />;
    })}
  </ul>
);

export default BookList;
