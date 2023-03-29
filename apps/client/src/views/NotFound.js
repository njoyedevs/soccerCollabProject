import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="not-found d-flex align-items-center">
            <div>
                <img src="https://i.imgflip.com/3qsiqi.png?a465720" alt="Page not found" className="not-found-image w-10 h-40" />
            </div>
            <div >
                <h2 style={{color:"black"}} className="not-found-title">OOPS! PAGE NOT FOUND.</h2>
                <p style={{color:"black"}} className="not-found-message">
                    You must have picked the wrong door because I haven't been able to lay my eye on the page you've been searching for.
                </p>
                <Link className="btn btn-primary" to="/">BACK TO HOME</Link>
            </div>
        </div>
    );
};
