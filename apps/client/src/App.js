import './App.css';
import Standings from './components/StandingsComponent';
import Games from './components/GamesComponent';
import Game from './components/GameComponent';
import NavBar from './components/NavBar';
import BouncyBall from './components/BouncyBall';

const APIKEY = '';

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
      <BouncyBall angle="4" />
      <BouncyBall angle="2" />
      <BouncyBall angle="6" />
      <BouncyBall angle="3" />
      <BouncyBall angle="7" />
      <BouncyBall angle="5" />
      <BouncyBall angle="8" />
      <BouncyBall angle="9" />
    </div>
  );
}

export default App;
