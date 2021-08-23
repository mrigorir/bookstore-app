import React from 'react';

const AddBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.title.value = '';
    e.target.author.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Book title" />
      <input type="text" name="author" placeholder="Author" />
      <button type="submit">Add book</button>
    </form>
  );
};
export default AddBook;
