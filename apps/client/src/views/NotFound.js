import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css'

export const NotFound = () => {
  return (
    <div className="section _404">
      <div className="container error">
        <div className="error-wrapper">
          <div className="big-score">4</div>
          <img
            src="https://uploads-ssl.webflow.com/5b125a6e804c1f1811d564c3/5b1fbf7d1b1760fd3223d2fa_404-ball.png"
            alt="404 error ball"
            className="_404-ball"
          />
          <div className="big-score">4</div>
        </div>
        <div className="error-text">
          <p>Looks like you missed the goal on this one. Try another page?</p>
        </div>
        <Link to='/' className="link goback">
        GO BACK
        </Link>
      </div>
    </div>
  );
}

