import './App.css';
import Standings from './components/StandingsComponent';
import Games from './components/GamesComponent';
import Game from './components/GameComponent';
import NavBar from './components/NavBar';

const APIKEY = 'b7a8474c1f81e9ce7295f98ce33eb5f4';

function App() {
  return (
    <div className="App">
      <header className="top-menu">
        <NavBar />
      </header>

      <div className="middleRow">Middle R - Insert Here</div>
      <div className="bottomCol">
        <div className="leftBottomCol box">
          <Standings apiKey={APIKEY} />
        </div>
        <div className="centerBottomCol box">
          <Games apiKey={APIKEY} />
        </div>
        <div className="rightBottomCol box">
          <Game apiKey={APIKEY} gameId="718243" />
        </div>
      </div>
    </div>
  );
}

export default App;
