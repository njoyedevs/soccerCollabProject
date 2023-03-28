import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFutbol, faStar, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <div className="dropDown">
        <Dropdown>
          <Dropdown.Toggle
            style={{ backgroundColor: 'black', border: '.1rem solid white' }}
            variant="secondary"
            id="dropdown-basic"
          >
            <FontAwesomeIcon icon={faBars} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">About the Developers</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="footyStats">
          <span>FootyStats</span>
        </div>
      </div>
      <div className="icons">
        <span>
          <FontAwesomeIcon icon={faFutbol} />
        </span>
        <span>Scores</span>
      </div>
      <div className="icons">
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span>Favorites</span>
      </div>
      <div className="icons">
        <span>
          <FontAwesomeIcon icon={faNewspaper} />
        </span>
        <span>News</span>
      </div>
      <button type="button" className="btn btn-outline-light .bg-dark " id="login-button">
        Login/Signup
      </button>
    </nav>
  );
};

export default NavBar;
