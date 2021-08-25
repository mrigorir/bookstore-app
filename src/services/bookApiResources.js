import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YaP0j3JR5U25R55QNKOB/books';

const getBooks = async () => {
  const response = await axios.get(url);
  const { data } = response;
  const books = [];
  Object.entries(data).forEach((book) => {
    books.push(
      {
        title: book[1][0].title,
        category: book[1][0].category,
        item_id: `${book[0]}`,
      },
    );
  });
  return books;
};

const createNewBook = async (newBook) => {
  const response = await axios.post(url, newBook);
  return response.data;
};

const removeBook = async (id) => {
  const removeURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YaP0j3JR5U25R55QNKOB/books/${id}`;
  const response = await axios.delete(removeURL);
  return response.data;
};

export { getBooks, createNewBook, removeBook };
