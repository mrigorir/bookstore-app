import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './components/categories';
import Nav from './components/nav';
import './App.css';
import AddBook from './components/books/AddBook';
import BookList from './components/books/BookList';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <AddBook />
          <BookList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
