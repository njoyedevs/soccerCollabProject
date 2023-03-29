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
// const API_FB_KEY = ""

function App() {
  const [desiredLeague, setDesiredLeague] = useState('39');

  const handleLeagueSelected = (selectedLeague) => {
    // console.log('Selected league in ParentComponent:', selectedLeague);
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
        <div className="iFrame">
          <iframe
            src="https://www.scorebat.com/embed/?token=NzE2NjRfMTY4MDA1NTM2OV9iNjAzMTg2YmYyZmIyNjQxNTllNjkwYWRkNjcwMDJlZTU1N2M0MTMy"
            width="600"
            height="760"
            // allowFullScreen
            allow="autoplay; fullscreen"
            style={{
              width: '100%',
              height: '30rem',
              overflow: 'hidden',
              // display: 'block',
            }}
            className="_scorebatEmbeddedPlayer_"
            title="Scorebat Embedded Player"
          ></iframe>
        </div>
        {/* <div
        style={{
          width: '30%',
          height: '30%',
          position: 'absolute',
          paddingBottom: '0%',
          background: '#000',
        }}
      >
        <iframe
        src="https://www.scorebat.com/embed/v/641ec7bfa111b/"
        width="100%"
        height="100%"
        // allowfullscreen
        allow='autoplay; fullscreen'
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: '0px',
          top: '0px',
          overflow: 'hidden',
        }}
        title="IndividualGame"
        ></iframe>
      </div> */}
      </div>
      <WaveBackground />
    </div>
  );
}

export default App;
