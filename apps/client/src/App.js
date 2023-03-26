import './App.css';
import Standings from './components/StandingsComponent';
import Games from './components/GamesComponent';
import Game from './components/GameComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFutbol, faStar, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import React from 'react';

const APIKEY = '';

function App() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </Button>
  ));

  return (
    <div className="App">
      <header className="top-menu">
        <nav className="navbar">
          <div className="icons">
            <div className="dropDown">
              <Dropdown>
                <Dropdown.Toggle
                  style={{ backgroundColor: 'black', border: 'none' }}
                  variant="secondary"
                  id="dropdown-basic"
                >
                  <FontAwesomeIcon icon={faBars} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <h5>FootyStats</h5>
          </div>
          <div className="icons">
            <p>
              <FontAwesomeIcon icon={faFutbol} />
            </p>
            <h5>Scores</h5>
          </div>
          <div className="icons">
            <p>
              <FontAwesomeIcon icon={faStar} />
            </p>
            <h5>Favorites</h5>
          </div>
          <div className="icons">
            <p>
              <FontAwesomeIcon icon={faNewspaper} />
            </p>
            <h5>News</h5>
          </div>
          <button type="button" class="btn btn-outline-light" id="login-button" as={CustomToggle}>
            Login/Signup
          </button>
        </nav>
      </header>

      <div className="middleRow">Middle R - Insert Here</div>
      <div className="bottomCol">
        <div className="leftBottomCol box">
          Standings
          <Standings apiKey={APIKEY} />
        </div>
        <div className="centerBottomCol box">
          Games
          <Games apiKey={APIKEY} />
        </div>
        <div className="rightBottomCol box">
          Game
          <Game apiKey={APIKEY} gameId="718243" />
        </div>
      </div>
    </div>
  );
}

export default App;
