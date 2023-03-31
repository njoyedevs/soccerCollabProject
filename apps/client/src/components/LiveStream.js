import React from 'react';

const LiveStream = (props) => {
  return (
    <div>
      <iframe
        src="https://www.scorebat.com/embed/"
        width="600"
        height="760"
        // allowFullScreen
        allow="autoplay; fullscreen"
        style={{
          width: '30rem',
          height: '32rem',
          overflow: 'hidden',
          // display: 'block',
          margin: '0rem .5rem 0rem 0rem',
        }}
        // className="_scorebatEmbeddedPlayer_"
        title="Scorebat Embedded Player"
      ></iframe>
    </div>
  );
};
export default LiveStream;
