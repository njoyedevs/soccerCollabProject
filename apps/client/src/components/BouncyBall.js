import React, { useState, useEffect } from 'react';
import soccerBallImage from '../static/soccer_ball.png';

const BouncyBall = ({ angle = 4 }) => {
  const [ball, setBall] = useState({
    x: 100,
    y: 100,
    radius: 30,
    angle: Math.PI / angle,
    speed: 20,
  });

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
  }, [ball, containerDimensions]);

  const ballStyle = {
    position: 'absolute',
    left: ball.x - ball.radius,
    top: ball.y - ball.radius,
    width: ball.radius * 2,
    height: ball.radius * 2,
    backgroundImage: `url(${soccerBallImage})`,
    backgroundSize: 'cover',
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