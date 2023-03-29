import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFutbol, faStar, faNewspaper, faVideo } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import jwt_decode from 'jwt-decode';
import SignOutButton from './SignOutButton';
import { createProduct } from '../services/internalApiService';
import { Link } from'react-router-dom';

const GOOGLE_ClientID = process.env.REACT_APP_GOOGLE_ClientID;

const NavBar = (props) => {
  const [user, setUser] = useState({});

  function HandleCallbackResponse(response) {
    // console.log('Encoded JWT ID token: ' + response.credential);
    var userObject = jwt_decode(response.credential);

    // console.log(userObject);
    setUser(userObject);

    const newObject = {
      firstName: userObject.given_name,
      lastName: userObject.family_name,
      fullName: userObject.name,
      email: userObject.email,
      emailVerification: userObject.email_verified,
      picture: userObject.picture,
    };

    createProduct(newObject)
      .then((result) => {
        if (result.error) {
          console.log(result.error);
          // Show an error message to the user using your preferred method, e.g., an alert or a toast notification
        } else {
          // Handle the successful creation of a new product
        }
      })
      .catch((err) => {
        console.error('Error creating product:', err);
        // Show a generic error message to the user if the promise was rejected
      });

    // console.log(newObject);

    document.getElementById('signInDiv').hidden = true; // - Turn Back on For Button
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: GOOGLE_ClientID,
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

  const handleScoresClick = () => {
    if (props.onScoresClick) {
      props.onScoresClick();
    }
  };

  const handleMatchesClick = () => {
    if (props.onMatchesClick) {
      props.onMatchesClick();
    }
  };

  const handleVideosClick = () => {
    if (props.onVideosClick) {
      props.onVideosClick();
    }
  };

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
            <Dropdown.Item ><Link to={`/team`}>About the Developers</Link> </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="footyStats">
          <span>FootyStats</span>
        </div>
      </div>
      <div className="icons" onClick={handleScoresClick}>
        <span>
          <FontAwesomeIcon icon={faFutbol} spin />
        </span>
        <span>Scores</span>
      </div>
      <div className="icons" onClick={handleMatchesClick}>
        <span>
          <FontAwesomeIcon icon={faStar} spin />
        </span>
        <span>Matches</span>
      </div>
      <div className="icons">
        <span>
          <FontAwesomeIcon icon={faNewspaper} spin />
        </span>
        <span>News</span>
      </div>
      <div className="icons" onClick={handleVideosClick}>
        <span>
          <FontAwesomeIcon icon={faVideo} style={{ color: '#ffffff' }} spin />
        </span>
        <span>Videos</span>
      </div>
      {/* <div id="signInDiv"></div> - Turn Back on For Button */}
      {/* className="btn btn-outline-light .bg-dark" - If needing the same styling as logout*/}
      <button type="button" id="signInDiv" className="login-button"></button>
      {Object.keys(user).length !== 0 && (
        <div>
          <SignOutButton user={user} handleSignOut={handleSignOut} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;

//
