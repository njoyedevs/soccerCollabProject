import React from 'react';

const Game = ({ apiKey, gameId, theme = '', refresh = '15', showErrors = 'false', showLogos = 'true' }) => {
  const iframeContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Football Game Widget</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        overflow: auto;
      }
    </style>
  </head>
  <body>
    <div id="wg-api-football-game"
      data-host="v3.football.api-sports.io"
      data-key="${apiKey}"
      data-id="${gameId}"
      data-theme="${theme}"
      data-refresh="${refresh}"
      data-show-errors="${showErrors}"
      data-show-logos="${showLogos}">
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
      title="Football Game Widget"
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

export default Game;
