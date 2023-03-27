import './App.css';
import Standings from './components/StandingsComponent';
import Games from './components/GamesComponent';
import Game from './components/GameComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFutbol, faStar, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';

const APIKEY = '';

function App() {
  return (
    <div className="App">
      <header className="top-menu">
        <nav className="navbar">
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
