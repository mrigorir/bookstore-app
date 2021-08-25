import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    e.target.title.value = '';
    e.target.category.value = '';
    dispatch(addBookAction(title, category));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Book title" required />
      <select name="category" palceholder="Choose a category" required>
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
