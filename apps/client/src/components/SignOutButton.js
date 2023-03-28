import React from 'react';
// import './SignOutButton.css';

const SignOutButton = ({ user, handleSignOut }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-light  sign-out-button login-button"
      onClick={(event) => handleSignOut(event)}
    >
      <img className="user-image" src={user.picture} alt="Profile" />
      <span>Log Out</span>
    </button>
  );
};

export default SignOutButton;
