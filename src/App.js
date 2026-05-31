import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';
import { getTokenFromCode } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer'; 
// 1. Import your fake database
import { mockDiscoverWeekly } from './mockData'; 

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      window.history.pushState({}, null, "/");

      getTokenFromCode(code).then((_token) => {
        if (_token) {
          dispatch({
            type: "SET_TOKEN",
            token: _token,
          });

          spotify.setAccessToken(_token);

          // Fetch user profile (usually works without Premium)
          spotify.getMe().then((user) => {
            dispatch({
              type: 'SET_USER',
              user: user,
            });
          });

          // Fetch Sidebar playlists (usually works without Premium)
          spotify.getUserPlaylists().then((playlists) => {
            dispatch({
              type: "SET_PLAYLISTS",
              playlists: playlists,
            });
          });

          // 2. BYPASS THE API BLOCK!
          // Instead of asking Spotify, we instantly inject our mock data into the vault
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: mockDiscoverWeekly,
          });
          
        }
      });
    }
  }, [dispatch]);

  return (
    <div className="app">
      {token ? (
        <>
          <div className="app__player">
            <Sidebar />
            <Body />
          </div>
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;