import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from './BookInfo';
import Circle from './Circle';
import ChapterInfo from './ChapterInfo';

const Book = ({ id, title, category }) => (
  <li id={id} className="bookContainer">
    <BookInfo id={id} title={title} category={category} />
    <div className="chapterInfoContainer">
      <Circle />
      <ChapterInfo />
    </div>
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
