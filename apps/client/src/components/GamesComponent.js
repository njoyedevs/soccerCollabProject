import React from 'react';

const Games = ({
  apiKey,
  date = "",
  league = '', //[1, 2, 3, 4, 5, 6, 9, 10, 15, 39, 45, 61, 66, 78, 88, 135, 140, 143, 253, 307]
  season = '',
  theme = 'dark',
  refresh = '15',
  showToolbar = 'true',
  showErrors = 'false',
  showLogos = 'true',
  modalGame = 'true',
  modalStandings = 'true',
  modalShowLogos = 'true',
}) => {
  // const leagueIds = league.join(",");

  const iframeContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Football Games Widget</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        overflow: auto;
      }
    </style>
  </head>
  <body>
    <div id="wg-api-football-games"
      data-host="v3.football.api-sports.io"
      data-key="${apiKey}"
      data-date= "${date}"
      data-league="${league}"
      data-season="${season}"
      data-theme="${theme}"
      data-refresh="${refresh}"
      data-show-toolbar="${showToolbar}"
      data-show-errors="${showErrors}"
      data-show-logos="${showLogos}"
      data-modal-game="${modalGame}"
      data-modal-standings="${modalStandings}"
      data-modal-show-logos="${modalShowLogos}">
    </div>
    <script
      type="module"
      src="https://widgets.api-sports.io/2.0.3/widgets.js">
    </script>
  </body>
  </html>
  `;

  return (
    <iframe
      title="Football Games Widget"
      srcDoc={iframeContent}
      style={{
        width: '100%',
        height: '500px', // Adjust the height according to your needs
        border: 'none',
        overflow: 'auto',
      }}
    ></iframe>
  );
};

export default Games;
