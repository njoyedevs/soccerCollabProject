import React from 'react';

const Standings = ({
  apiKey,
  league = '39',
  team = '',
  season = '2022',
  theme = '',
  showErrors = 'false',
  showLogos = 'true',
}) => {
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
    <iframe
      title="Football Standings Widget"
      srcDoc={iframeContent}
      style={{
        width: '100%',
        height: '500px', // Adjust the height according to your needs
        border: 'none',
        overflow: 'audo',
      }}
    ></iframe>
  );
};

export default Standings;
