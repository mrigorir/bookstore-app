import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBooksAction } from '../redux/books/books';

const hooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction());
  }, []);
};

export default hooks;
