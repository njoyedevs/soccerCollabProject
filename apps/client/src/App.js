import './App.css';
import Standings from './components/StandingsComponent';
import Games from './components/GamesComponent';
import Game from './components/GameComponent';
import NavBar from './components/NavBar';
import WaveBackground from './components/WaveBackground';
import BallsComponent from './components/BallsComponent';

const API_FB_KEY = process.env.REACT_APP_API_FB_KEY;

function App() {
  return (
    <div className="App">
      <header className="top-menu">
        <NavBar />
      </header>
      <div className="middleCol">
        <BallsComponent />
      </div>
      <div className="bottomCol">
        <div className="leftBottomCol box">
          <Standings apiKey={API_FB_KEY} />
        </div>
        <div className="centerBottomCol box ">
          <Games apiKey={API_FB_KEY} />
        </div>
        <div className="rightBottomCol box">
          <Game apiKey={API_FB_KEY} gameId="718243" />
        </div>
      </div>
      <WaveBackground />
    </div>
  );
}

export default App;
