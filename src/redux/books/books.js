import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

const addBookAction = (title, author) => ({
  type: ADD_BOOK,
  payload: {
    title,
    author,
    id: uuidv4(),
  },
});

const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export { addBookAction, removeBookAction, booksReducer };
