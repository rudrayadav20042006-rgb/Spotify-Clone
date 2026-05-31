import React from 'react';
import './SongRow.css';
import { useDataLayerValue } from '../DataLayer';

function SongRow({ track }) {
  // Pull the dispatch gun out of the vault
  const [{}, dispatch] = useDataLayerValue();

  // Function to shoot the clicked track data to the reducer
  const changeTrack = () => {
    dispatch({
      type: 'SET_ITEM',
      item: track,
    });
  };

  return (
    // Add the onClick event listener here
    <div className="songRow" onClick={changeTrack}>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;