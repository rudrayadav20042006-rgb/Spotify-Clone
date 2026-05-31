import React from 'react';
import './Sidebar.css';
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {
  // NEW CODE: Pull the playlists out of the Data Layer
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className="sidebar">
     <img
        className="sidebar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
        alt="Spotify Logo"
      />
      
      <div className="sidebar__option">Home</div>
      <div className="sidebar__option">Search</div>
      <div className="sidebar__option">Your Library</div>
      
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {/* NEW CODE: Loop through your real Spotify playlists! */}
      {playlists?.items?.map((playlist) => (
        <div key={playlist.id} className="sidebar__option">
          <p>{playlist.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;