import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import BouncyBall from './BouncyBall';

const BallsComponent = () => {
  const [sliderValue, setSliderValue] = useState(10);
  const [ballsVisible, setBallsVisible] = useState(false);

  const [numBalls, setNumBalls] = useState(1);

  const handleNumBallsSliderChange = (event) => {
    const value = event.target.value;
    setNumBalls(value);
  };

  const handleSliderChange = (event) => {
    const value = event.target.value;
    // console.log('Slider value:', value);
    setSliderValue(value);
    // console.log(sliderValue)
  };

  const toggleBallsVisibility = () => {
    setBallsVisible(!ballsVisible);
  };

  const randomAngle = () => {
    return Math.floor(Math.random() * (11 - 3 + 1)) + 3;
  };

  const renderBouncyBalls = () => {
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      balls.push(<BouncyBall key={i} angle={randomAngle()} sliderValue={sliderValue} />);
    }

    return balls;
  };

  return (
    <>
      <div className="bounceButton">
        <button
          style={{
            color: 'white',
            backgroundColor: 'transparent',
            border: 'none',
            margin: '0rem 0rem 0rem .3rem',
            padding: '0rem',
          }}
          onClick={toggleBallsVisibility}
        >
          {ballsVisible ? (
            <FontAwesomeIcon icon={faFutbol} style={{ '--fa-secondary-color': '#ebc400' }} />
          ) : (
            <FontAwesomeIcon icon={faFutbol} bounce style={{ '--fa-secondary-color': '#ebc400' }} />
          )}
          <p>Bounce Me</p>
        </button>
        {ballsVisible && renderBouncyBalls()}
      </div>
      <div className="sliderContainer">
        <label className="sliderLabel" htmlFor="slider">
          Speed
        </label>
        <div className="slider">
          <input
            type="range"
            id="slider"
            name="slider"
            min="0"
            max="100"
            step="1"
            value={sliderValue}
            onChange={handleSliderChange}
          />
        </div>
        <label className="sliderLabel" htmlFor="numBallsSlider">
          # Balls
        </label>
        <div className="slider">
          <input
            type="range"
            id="numBallsSlider"
            name="numBallsSlider"
            min="1"
            max="20"
            step="1"
            value={numBalls}
            onChange={handleNumBallsSliderChange}
          />
        </div>
      </div>
    </>
  );
};

export default BallsComponent;
