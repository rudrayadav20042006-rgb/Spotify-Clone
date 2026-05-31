import React from 'react';
import './Login.css';
import { redirectToSpotifyLogin } from '../spotify'; // <-- Updated import!

function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      {/* We swapped the <a> tag for a <div> with an onClick event */}
      <div onClick={redirectToSpotifyLogin} className="login__button">
        LOGIN WITH SPOTIFY
      </div>
    </div>
  );
}

export default Login;