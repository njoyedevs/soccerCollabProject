import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFutbol, faStar, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import jwt_decode from 'jwt-decode';
import SignOutButton from './SignOutButton';
import { createProduct } from '../services/internalApiService';
const ClientID = process.env.REACT_APP_ClientID;

const NavBar = (props) => {
  const [user, setUser] = useState({});

  function HandleCallbackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    var userObject = jwt_decode(response.credential);

    console.log(userObject);
    setUser(userObject);

    const newObject = {
      given_name: userObject.given_name,
      family_name: userObject.family_name,
      name: userObject.name,
      email: userObject.email,
      email_verified: userObject.email_verified,
      picture: userObject.picture,
    };

    createProduct(newObject);
    console.log(newObject);

    document.getElementById('signInDiv').hidden = true; // - Turn Back on For Button
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: ClientID,
      callback: HandleCallbackResponse,
    });

    google.accounts.id.renderButton(
      // - Turn Back on For Button
      document.getElementById('signInDiv'),
      { theme: 'filled_black', size: 'large', type: 'standard' } // Can use type icon instead of standard and size small and theme outline for white
    );

    // console.log(user)

    // google.accounts.id.prompt() // Turn on for Prompt instead of Button
    // eslint-disable-next-line
  }, []);

  function handleSignOut(event) {
    setUser({});
    document.getElementById('signInDiv').hidden = false; // Turn Back on For Button
  }

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
      {/* <button type="button" className="btn btn-outline-light .bg-dark " id="login-button">
        Login/Reg
      </button> */}
      {/* <div id="signInDiv"></div> - Turn Back on For Button */}
      {/* className="btn btn-outline-light .bg-dark" - If needing the same styling as logout*/}
      <button type="button" id="signInDiv" className="login-button"></button>
      {Object.keys(user).length !== 0 && (
        <div>
          {/* <button onClick={(event) => handleSignOut(event)}>Sign Out</button> */}
          {/* <button type="button"className="btn btn-outline-light .bg-dark " id="login-button" onClick={(event) => handleSignOut(event)}>
            Sign Out
          </button>
          <img src={user.picture} alt='Profile'></img>
          <h3>{user.name}</h3> */}
          <SignOutButton user={user} handleSignOut={handleSignOut} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;

//
