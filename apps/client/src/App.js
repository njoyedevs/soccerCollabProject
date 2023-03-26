import './App.css';
import Standings from './components/StandingsComponent';
import Games from './components/GamesComponent';
import Game from './components/GameComponent';
const APIKEY = '';

function App() {
  return (
    <div className="App">
      <nav className="top">
        <h1>NavBar - Insert Here</h1>
      </nav>

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
