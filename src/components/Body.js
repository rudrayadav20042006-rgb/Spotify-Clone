import React from 'react';
import './Body.css';
import { useDataLayerValue } from '../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body() {
  const [{ discover_weekly }] = useDataLayerValue();

  return (
    <div className="body">
      <div className="body__info">
        <img
          src={discover_weekly?.images?.[0]?.url || "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"}
          alt="Playlist Art"
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name || "Loading..."}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {/* Map through the mock data and render a SongRow for each item */}
        {discover_weekly?.tracks.items.map((item, index) => (
          <SongRow key={index} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;