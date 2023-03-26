import './App.css';
import Standings from './components/StandingsComponent';
import Games from './components/GamesComponent';
import Game from './components/GameComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFutbol, faStar, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const APIKEY = "";


function App() {
  return (
    <div className="App">
      <header className="top-menu">
        <nav className='navbar'>
          <div className='icons'>
            <div className="nav-item dropdown">
              <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faBars} />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">About the Developers</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <h5>FootyStats</h5>
          </div>
          <div className='icons'>
            <p><FontAwesomeIcon icon={faFutbol} /></p>
            <h5>Scores</h5>
          </div>
          <div className='icons'>
            <p><FontAwesomeIcon icon={faStar} /></p>
            <h5>Favorites</h5>
          </div>
          <div className='icons'>
            <p><FontAwesomeIcon icon={faNewspaper} /></p>
            <h5>News</h5>
          </div>
          <button type="button" class="btn btn-outline-light" id="login-button">Login/Signup</button>
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
