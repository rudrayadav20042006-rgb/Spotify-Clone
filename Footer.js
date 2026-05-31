import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';
import { useDataLayerValue } from '../DataLayer'; // <-- Import the vault

function Footer() {
  // Pull the currently playing 'item' out of the vault
  const [{ item }] = useDataLayerValue();

  return (
    <div className="footer">
      <div className="footer__left">
        {/* Render dynamic data with a Linkin Park fallback for the initial load */}
        <img
          className="footer__albumLogo"
          src={item?.album?.images[0]?.url || "https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg"}
          alt="Album cover"
        />
        <div className="footer__songInfo">
          <h4>{item ? item.name : "In The End"}</h4>
          <p>{item ? item.artists.map((artist) => artist.name).join(", ") : "Linkin Park"}</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;