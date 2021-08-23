import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';
import Nav from './components/nav';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
