import React from 'react';

const StreamOne = (props) => {
  return (
    <div
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
        allow="autoplay; fullscreen"
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
    </div>
  );
};
export default StreamOne;
