import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFutbol, faStar, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <div className="dropDown">
        <Dropdown>
          <Dropdown.Toggle style={{ backgroundColor: 'black', border: 'none' }} variant="secondary" id="dropdown-basic">
            <FontAwesomeIcon icon={faBars} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="footyStats">
          <p>FootyStats</p>
        </div>
      </div>
      <div className="icons">
        <p>
          <FontAwesomeIcon icon={faFutbol} />
        </p>
        <p>Scores</p>
      </div>
      <div className="icons">
        <p>
          <FontAwesomeIcon icon={faStar} />
        </p>
        <p>Favorites</p>
      </div>
      <div className="icons">
        <p>
          <FontAwesomeIcon icon={faNewspaper} />
        </p>
        <p>News</p>
      </div>
      <button type="button" className="btn btn-outline-light" id="login-button">
        Login/Signup
      </button>
    </nav>
  );
};

export default NavBar;
