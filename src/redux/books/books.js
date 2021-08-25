import { v4 as uuidv4 } from 'uuid';
import { getBooks, createNewBook, removeBook } from '../../services/bookApiResources';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const getBooksAction = () => async (dispatch) => {
  const books = await getBooks();

  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
};

const addBookAction = (title, category) => async (dispatch) => {
  const newBook = {
    item_id: uuidv4(),
    title: `${title}`,
    category: `${category}`,
  };

  await createNewBook(newBook);

  dispatch({
    type: ADD_BOOK,
    payload: newBook,
  });
};

const removeBookAction = (id) => async (dispatch) => {
  await removeBook(id);

  dispatch({
    type: REMOVE_BOOK,
    payload: {
      item_id: id,
    },
  });
};

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return [...state, ...action.payload];

    case ADD_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.item_id !== action.payload.item_id);
    }
    default:
      return state;
  }
};

export {
  getBooksAction, addBookAction, removeBookAction, booksReducer,
};
