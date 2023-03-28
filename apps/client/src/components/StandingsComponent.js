import React, { useState } from 'react';


const Standings = ({
  apiKey,
  team = '',
  season = '2022',
  theme = 'dark',
  showErrors = 'false',
  showLogos = 'true',
}) => {
  const [league, setLeague] = useState('');
  const handleLeagueSelection = (e) => {
    const selectedLeague = e.target.value;
    setLeague(selectedLeague);
  };

  const styles = {
    container: {
      backgroundColor: "#222222",
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    },
  };
  const leagues = [
    {
      id: "39",
      name: "Premier League",
      img: "https://media-3.api-sports.io/flags/gb.svg"
    },
    {
      id: "140",
      name: "La Liga",
      img: "https://media-1.api-sports.io/flags/es.svg"
    },
    {
      id: "78",
      name: "Bundesliga",
      img: "https://media-1.api-sports.io/flags/de.svg"
    },
    {
      id: "61",
      name: "Ligue 1",
      img: "https://media-2.api-sports.io/flags/fr.svg"
    },
    {
      id: "135",
      name: "Seria A",
      img: "https://media-2.api-sports.io/flags/it.svg"
    },
    {
      id: "88",
      name: "Eredivisie",
      img: "https://media-2.api-sports.io/flags/nl.svg"
    },
    {
      id: "253",
      name: "Major League Soccer",
      img: "https://media-3.api-sports.io/flags/us.svg"
    },
    {
      id: "307",
      name: "Saudi Pro League",
      img: "https://media-2.api-sports.io/flags/sa.svg"
    },
    {
      id: "2",
      name: "Champions League",
      img: "https://cdn.worldvectorlogo.com/logos/uefa-champions-league-2.svg"
    },
    {
      id: "1",
      name: "World Cup",
      img: "https://logowik.com/content/uploads/images/fifa-world-cup-qatar-20229564.jpg"
    },
    {
      id: "3",
      name: "Europa League",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Europa_League_2021.svg/644px-Europa_League_2021.svg.png?20220101200214"
    },
    {
      id: "5",
      name: "Nations League",
      img: "https://logowik.com/content/uploads/images/uefa-nations-league.jpg"
    },
  ];




  const iframeContent = `${`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Football Standings Widget</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        overflow: auto;
      }
    </style>
  </head>
  <body>
    <div id="wg-api-football-standings"
      data-host="v3.football.api-sports.io"
      data-key="${apiKey}"
      data-league="${league}"
      data-team="${team}"
      data-season="${season}"
      data-theme="${theme}"
      data-show-errors="${showErrors}"
      data-show-logos="${showLogos}"
      class="wg_loader">
    </div>
    <script
      type="module"
      src="https://widgets.api-sports.io/2.0.3/widgets.js">
    </script>
  </body>
  </html>
  `}`;

  return (
    <div>
      <div style={styles.container}>
        <div style={{borderBottom: "1px solid grey", textAlign:"center"}}><h5>Leagues</h5></div>
          {leagues.map(league => (
            <button key={league.id} value={league.id} onClick={handleLeagueSelection} className="btn btn-link" style={{ textDecoration: "none", color: "white", display: "block" }}>
              {league.img && <img src={league.img} alt={league.name} style={{width: 20, background: "white", marginRight: "10px", boxShadow: "1px 1px 2px #888888"}}/>}
              {league.name}
            </button>
          ))}
        </div>
      {/* <iframe
        title="Football Standings Widget"
        srcDoc={iframeContent}
        style={{
          width: '100%',
          height: '500px', // Adjust the height according to your needs
          border: 'none',
          overflow: 'audo',
        }}
      ></iframe> */}
    </div>
  );
};

export default Standings;



      // {/* <div style={styles.container}>
      //   <button value="39" onClick={handleLeagueSelection} className="btn btn-link" style={{ textDecoration: "none", color: "white", display: "block" }}>
      //     🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League
      //   </button>
      //   <button value="140" onClick={handleLeagueSelection} className="btn btn-link" style={{ textDecoration: "none", color: "white", display: "block" }}>
      //   🇪🇸  La Liga
      //   </button>
      //   <button value="78" onClick={handleLeagueSelection} className="btn btn-link" style={{ textDecoration: "none", color: "white", display: "block" }}>
      //     🇩🇪  Bundesliga
      //   </button>
      //   <button value="61" onClick={handleLeagueSelection} className="btn btn-link" style={{ textDecoration: "none", color: "white", display: "block" }}>
      //     🇫🇷 League 1
      //   </button>
      //   <button value="135" onClick={handleLeagueSelection} className="btn btn-link" style={{ textDecoration: "none", color: "white", display: "block" }}>
      //   🇮🇹  Seria A
      //   </button>
      //   <button value="88" onClick={handleLeagueSelection} className="btn btn-link" style={{ textDecoration: "none", color: "white", display: "block" }}>
      //   🇳🇱 Eredivisie
      //   </button>
      //   <button value="253" onClick={handleLeagueSelection} className="btn btn-link" style={{ textDecoration: "none", color: "white", display: "block" }}>
      //   🇺🇸  Major League Soccer
      //   </button>
      //   <button value="307" onClick={handleLeagueSelection} className="btn btn-link" style={{ textDecoration: "none", color: "white", display: "block" }}>
      //   🇸🇦 Pro League
      //   </button>
      //   <button value="2" onClick={handleLeagueSelection} className="btn btn-link" style={{ textDecoration: "none", color: "white", display: "block" }}>
      //   <img src="https://i.pinimg.com/originals/43/30/e2/4330e22ea8fa6bc8e83fb3a7f26446a3.png" alt="champions" style={{width: 20,background: "white",borderRadius: "50%",boxShadow: "1px 1px 2px #888888"}}/> Champions League
      //   </button>
      //   <button value="3" onClick={handleLeagueSelection} className="btn btn-link" style={{ textDecoration: "none", color: "white", display: "block" }}>
      //   <img src="https://media.api-sports.io/football/leagues/3.png" alt="champions" style={{width: 20,background: "white",borderRadius: "50%",boxShadow: "1px 1px 2px #888888"}}/> Europa League
      //   </button>
      //   <button value="5" onClick={handleLeagueSelection} className="btn btn-link" style={{ textDecoration: "none", color: "white", display: "block" }}>
      //   <img src="https://media.api-sports.io/football/leagues/5.png" alt="champions" style={{width: 20,background: "white",borderRadius: "50%",boxShadow: "1px 1px 2px #888888"}}/> Nations League
      //   </button>
      //   <button value="1" onClick={handleLeagueSelection} className="btn btn-link" style={{ textDecoration: "none", color: "white", display: "block" }}>
      //   <img src="https://www.vhv.rs/dpng/d/468-4686418_world-cup-trophy-vector-hd-png-download.png" alt="champions" style={{width: 20,background: "white",borderRadius: "50%",boxShadow: "1px 1px 2px #888888"}}/> World Cup
      //   </button>

      // </div> */}


