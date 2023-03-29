import './App.css';
import React, { useState } from 'react';
import Standings from './components/StandingsComponent';
import Games from './components/GamesComponent';
// import Game from './components/GameComponent';
import NavBar from './components/NavBar';
import WaveBackground from './components/WaveBackground';
import BallsComponent from './components/BallsComponent';
import Leagues from './components/LeaguesComponent';
import LiveStream from './components/LiveStream';

const API_FB_KEY = process.env.REACT_APP_API_FB_KEY;
// const API_FB_KEY = ""

function App() {
  const [desiredLeague, setDesiredLeague] = useState('39');
  const [showScores, setShowScores] = useState(true);
  const [showMatches, setShowMatches] = useState(true);
  const [showVideos, setShowVideos] = useState(false);

  const handleLeagueSelected = (selectedLeague) => {
    // console.log('Selected league in ParentComponent:', selectedLeague);
    setDesiredLeague(selectedLeague);
    // Do something with the selected league here
  };

  const handleScoresClick = () => {
    setShowScores(!showScores);
  };

  const handleMatchesClick = () => {
    setShowMatches(!showMatches);
  };

  const handleVideosClick = () => {
    setShowVideos(!showVideos);
  };

  return (
    <div className="App">
      <header className="top-menu">
        <NavBar
          onScoresClick={handleScoresClick}
          onMatchesClick={handleMatchesClick}
          onVideosClick={handleVideosClick}
        />
      </header>
      <div className="middleRow">
        <BallsComponent />
      </div>
      <div className="bottomCol">
        {showScores && (
          <>
            <div className="leftBottomCol box">
              <Leagues handleLeagueSelected={handleLeagueSelected} />
            </div>
            <div className="rightBottomCol box">
              <Standings apiKey={API_FB_KEY} league={desiredLeague} />
            </div>
          </>
        )}
        {showMatches && (
          <div className="centerBottomCol box">
            <Games apiKey={API_FB_KEY} />
          </div>
        )}
        {showVideos && (
          <div className="videoBottomCol box">
            <LiveStream />
          </div>
        )}
      </div>
      <WaveBackground />
    </div>
  );
}

export default App;
