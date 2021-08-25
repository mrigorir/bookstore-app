import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookAction(title, category));
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Book title" value={title} onChange={handleTitle} required />
      <select name="category" palceholder="Choose a category" value={category} onChange={handleCategory} required>
        <option selected disabled value=""> Choose a Category </option>
        <option value="Fiction">Fiction</option>
        <option value="Action">Action</option>
        <option value="Terror">Terror</option>
      </select>
      <button type="submit">Add book</button>
    </form>
  );
};
export default AddBook;
