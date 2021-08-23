import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/"> BookStore </Link>
      </li>
      <li>
        <Link to="/categories"> Categories </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
