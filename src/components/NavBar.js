import React from 'react';
import { Link} from 'react-router-dom';
const NavBar =() => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/houses">House List</Link>
          </li>
          <li>
            <Link to="/new">Create a House</Link>
          </li>
        </ul>
    </nav>
    );
  };

export default NavBar;
