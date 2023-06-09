import '../App.css';
import React, { useState, useEffect } from 'react';
import { getKeys } from '../services/internalApiService';
import Standings from './StandingsComponent';
import Games from './GamesComponent';
import NavBar from './NavBar';
import WaveBackground from './WaveBackground';
import BallsComponent from './BallsComponent';
import Leagues from './LeaguesComponent';
import LiveStream from './LiveStream';
import ChatGPT4Component from './ChatGPT4Component';

function Home() {
  const [desiredLeague, setDesiredLeague] = useState('39');
  const [showScores, setShowScores] = useState(true);
  const [showMatches, setShowMatches] = useState(true);
  const [showVideos, setShowVideos] = useState(false);
  const [showNews, setShowNews] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [profileImg, setProfileImg] = useState('');
  const [apiFbKey, setApiFbKey] = useState(null);

  useEffect(() => {
    getKeys()
      .then((data) => {
        if (data.error) {
          console.error('Error fetching API key in Home:', data.error);
        } else {
          setApiFbKey(data.API_FB_KEY);
        }
      })
      .catch((error) => {
        console.error('Error fetching API key in Home:', error);
      });
  }, []);

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

  const handleNewsClick = () => {
    setShowNews(!showNews);
  };

  const handleChatClick = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="App">
      <header className="top-menu">
        <NavBar
          onScoresClick={handleScoresClick}
          onMatchesClick={handleMatchesClick}
          onVideosClick={handleVideosClick}
          onNewsClick={handleNewsClick}
          onChatClick={handleChatClick}
          setProfileImg={setProfileImg}
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
              <Standings apiKey={apiFbKey} league={desiredLeague} />
            </div>
          </>
        )}
        {showMatches && (
          <div className="centerBottomCol box">
            <Games apiKey={apiFbKey} />
          </div>
        )}
        {showVideos && (
          <div className="videoBottomCol box">
            <LiveStream />
          </div>
        )}
      </div>
      <div className="lastCol">
        {showChat && (
          <div className="chatGPT4">
            <ChatGPT4Component />
          </div>
        )}
        {showChat && (
          <div className="chatGPT4">
            <ChatGPT4Component profileImg={profileImg} onChatClick={handleChatClick} />
          </div>
        )}
      </div>
      <WaveBackground />
    </div>
  );
}

export default Home;
