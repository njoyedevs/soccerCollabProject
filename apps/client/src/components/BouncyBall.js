import React, { useState, useEffect } from 'react';
// import soccerBallImage from '../static/images/soccer_ball.png';
// import soccerBallImage from '../static/images/3d_gold_soccerball.png';
import soccerBallImage from '../static/images/3d_gold_soccerball2.png';
// import soccerBallImage from '../static/images/3d_yellow_black_football.png';

const BouncyBall = ({ angle = 4 }) => {
  const [ball, setBall] = useState({
    x: 100,
    y: 100,
    radius: 30, // Radius of the ball
    angle: Math.PI / angle,
    speed: 18, // Speed of the ball
    rotation: 0,
  });

  const [additionalRotation, setAdditionalRotation] = useState(0);

  const [containerDimensions, setContainerDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setContainerDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      const newBall = { ...ball };

      newBall.x += Math.cos(newBall.angle) * newBall.speed;
      newBall.y += Math.sin(newBall.angle) * newBall.speed;

      newBall.rotation = newBall.angle * (180 / Math.PI) + additionalRotation;

      if (newBall.x - newBall.radius < 0) {
        newBall.x = newBall.radius;
        newBall.angle = Math.PI - newBall.angle;
      } else if (newBall.x + newBall.radius > containerDimensions.width) {
        newBall.x = containerDimensions.width - newBall.radius;
        newBall.angle = Math.PI - newBall.angle;
      }
      if (newBall.y < newBall.radius) {
        newBall.y = newBall.radius;
        newBall.angle = Math.PI * 2 - newBall.angle;
      } else if (newBall.y + newBall.radius > containerDimensions.height) {
        newBall.y = containerDimensions.height - newBall.radius;
        newBall.angle = Math.PI * 2 - newBall.angle;
      }

      setBall(newBall);
    };

    const animation = setInterval(() => {
      updatePosition();
    }, 1000 / 60);

    return () => clearInterval(animation);
    // eslint-disable-next-line
  }, [ball, containerDimensions]);

  useEffect(() => {
    const updateAdditionalRotation = () => {
      setAdditionalRotation((prevRotation) => prevRotation + 19); // Angle of Rotation
    };

    const rotationInterval = setInterval(() => {
      updateAdditionalRotation();
    }, 40); // Rotation Speed

    return () => clearInterval(rotationInterval);
  }, []);

  const ballStyle = {
    position: 'absolute',
    left: ball.x - ball.radius,
    top: ball.y - ball.radius,
    width: ball.radius * 2,
    height: ball.radius * 2,
    backgroundImage: `url(${soccerBallImage})`,
    backgroundSize: 'cover',
    transform: `rotate(${ball.rotation}deg)`,
    transformOrigin: 'center',
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${containerDimensions.width}px`,
        height: `${containerDimensions.height}px`,
        pointerEvents: 'none',
        zIndex: -1,
      }}
    >
      <div key={`${ball.x}-${ball.y}`} style={ballStyle}></div>
    </div>
  );
};

export default BouncyBall;
