import React, { useState, useEffect } from 'react';

const Leagues = (props) => {
  const { handleLeagueSelected } = props;
  const [league, setLeague] = useState('');

  const handleLeagueSelection = (e) => {
    const selectedLeague = e.target.value;
    setLeague(selectedLeague);
    handleLeagueSelected(selectedLeague);
  };
  useEffect(() => {
    // Do something when the league state changes, e.g., fetch new data, update the UI, etc.
    // console.log('League changed to:', league);
    // If needed, you can also clean up any resources or side effects here using a cleanup function.
  }, [league]); // Add 'league' as a dependency

  const styles = {
    container: {
      backgroundColor: '#222222',
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    },
  };
  const leagues = [
    {
      id: '39',
      name: 'Premier League',
      img: 'https://media-3.api-sports.io/flags/gb.svg',
    },
    {
      id: '140',
      name: 'La Liga',
      img: 'https://media-1.api-sports.io/flags/es.svg',
    },
    {
      id: '78',
      name: 'Bundesliga',
      img: 'https://media-1.api-sports.io/flags/de.svg',
    },
    {
      id: '61',
      name: 'Ligue 1',
      img: 'https://media-2.api-sports.io/flags/fr.svg',
    },
    {
      id: '135',
      name: 'Seria A',
      img: 'https://media-2.api-sports.io/flags/it.svg',
    },
    {
      id: '88',
      name: 'Eredivisie',
      img: 'https://media-2.api-sports.io/flags/nl.svg',
    },
    {
      id: '253',
      name: 'Major League Soccer',
      img: 'https://media-3.api-sports.io/flags/us.svg',
    },
    {
      id: '307',
      name: 'Saudi Pro League',
      img: 'https://media-2.api-sports.io/flags/sa.svg',
    },
    {
      id: '2',
      name: 'Champions League',
      img: 'https://cdn.worldvectorlogo.com/logos/uefa-champions-league-2.svg',
    },
    {
      id: '1',
      name: 'World Cup',
      img: 'https://logowik.com/content/uploads/images/fifa-world-cup-qatar-20229564.jpg',
    },
    {
      id: '3',
      name: 'Europa League',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Europa_League_2021.svg/644px-Europa_League_2021.svg.png?20220101200214',
    },
    {
      id: '5',
      name: 'Nations League',
      img: 'https://logowik.com/content/uploads/images/uefa-nations-league.jpg',
    },
  ];
  return (
    <div style={styles.container}>
      <div style={{ borderBottom: '1px solid grey', textAlign: 'center' }}>
        <h5>Leagues</h5>
      </div>
      {leagues.map((league) => (
        <button
          key={league.id}
          value={league.id}
          onClick={handleLeagueSelection}
          className="btn btn-link"
          style={{ textDecoration: 'none', color: 'white', display: 'block' }}
        >
          {league.img && (
            <img
              src={league.img}
              alt={league.name}
              style={{ width: 20, background: 'white', marginRight: '10px', boxShadow: '1px 1px 2px #888888' }}
            />
          )}
          {league.name}
        </button>
      ))}
    </div>
  );
};
export default Leagues;
