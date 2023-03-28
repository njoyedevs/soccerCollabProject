import './App.css';
import React, { useState } from 'react';
import Standings from './components/StandingsComponent';
import Games from './components/GamesComponent';
// import Game from './components/GameComponent';
import NavBar from './components/NavBar';
import BouncyBall from './components/BouncyBall';
import WaveBackground from './components/WaveBackground';
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
      {/* <div id="signInDiv"></div> */}
      <header className="top-menu">
        <NavBar />
      </header>
      <div className="bottomCol">
        <div className="leftBottomCol box">
          <Leagues handleLeagueSelected={handleLeagueSelected}/>
        </div>
        <div className="centerBottomCol box ">
          <Games apiKey={API_FB_KEY} />
        </div>
        <div className="rightBottomCol box">
          <Standings apiKey={API_FB_KEY} league={desiredLeague}/>
        </div>

      </div>
      <BouncyBall angle="3" />
      <BouncyBall angle="4" />
      <BouncyBall angle="5" />
      <BouncyBall angle="6" />
      <BouncyBall angle="7" />
      <BouncyBall angle="8" />
      <BouncyBall angle="9" />
      <BouncyBall angle="10" />
      <BouncyBall angle="11" />
      <WaveBackground />
    </div>
  );
}

export default App;

