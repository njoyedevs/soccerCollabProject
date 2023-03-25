import './App.css';
import Standings from './components/StandingsComponent';
import Games from './components/GamesComponent';
import Game from './components/GameComponent';
const APIKEY = 'b7a8474c1f81e9ce7295f98ce33eb5f4';

function App() {
  return (
    <div className="App">
      <nav className="top">
        <h1>NavBar - Insert Here</h1>
      </nav>

      <div className="middleRow">Middle R - Insert Here</div>
      <div className="bottomCol">
        <div className="leftBottomCol box">
          <Games apiKey={APIKEY} />
        </div>
        <div className="centerBottomCol box">
          <Game apiKey={APIKEY} gameId="718243" />
        </div>
        <div className="rightBottomCol box">
          <Standings apiKey={APIKEY} />
        </div>
      </div>
    </div>
  );
}

export default App;
