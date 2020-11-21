import React from 'react'
import "./SwipeButtons.css";
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@material-ui/icons/Clear';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__x">
        <ClearIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__heart">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons
