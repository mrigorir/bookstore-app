import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav';
import AddBook from './components/books/AddBook';
import BookList from './components/books/BookList';
import Categories from './components/categories';
import './App.css';
import './assets/styles/nav.css';
import './assets/styles/book.css';
import './assets/styles/circle.css';
import './assets/styles/form.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <BookList />
          <AddBook />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
