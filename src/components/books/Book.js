import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBookAction(id));
  };

  return (
    <li id={id}>
      <div>
        <h2>
          {title}
        </h2>
        <p>
          {author}
        </p>
      </div>
      <button type="button" onClick={() => handleRemove(id)}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
