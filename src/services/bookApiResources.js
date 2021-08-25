import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YaP0j3JR5U25R55QNKOB/books';

const getBooks = async () => {
  const response = await axios.get(url);
  const books = [];
  Object.entries(response).forEach((book) => {
    books.push(
      {
        title: book[1][0].title,
        category: book[1][0].category,
        item_id: `${book[0]}`,
      },
    );
  });
  return books;
}

const createNewBook = async (newBook) => {
  const addBook = await axios.post(url, newBook);
  return addBook.data;
}

const removeBook = async (id) => {
  const removeURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YaP0j3JR5U25R55QNKOB/books/${id}`
  const remove = await axios.delete(removeURL);
  return remove.data;
}

export { getBooks, createNewBook, removeBook };