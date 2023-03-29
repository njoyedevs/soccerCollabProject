import './App.css';
import React, { useState } from 'react';
import Standings from './components/StandingsComponent';
import Games from './components/GamesComponent';
// import Game from './components/GameComponent';
import NavBar from './components/NavBar';
import WaveBackground from './components/WaveBackground';
import BallsComponent from './components/BallsComponent';
import Leagues from './components/LeaguesComponent';

const API_FB_KEY = process.env.REACT_APP_API_FB_KEY;

function App() {
  const [desiredLeague, setDesiredLeague] = useState('39');

  const handleLeagueSelected = (selectedLeague) => {
    console.log('Selected league in ParentComponent:', selectedLeague);
    setDesiredLeague(selectedLeague);
    // Do something with the selected league here
  };

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
          <Leagues handleLeagueSelected={handleLeagueSelected} />
        </div>
        <div className="centerBottomCol box ">
          <Games apiKey={API_FB_KEY} />
        </div>
        <div className="rightBottomCol box">
          <Standings apiKey={API_FB_KEY} league={desiredLeague} />
        </div>
      </div>
      <WaveBackground />
    </div>
  );
}

export default App;
