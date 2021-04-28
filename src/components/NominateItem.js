import React, { useState } from 'react';
import {
  Button,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { RemoveCircleOutline, DragHandle } from '@material-ui/icons';
import MovieDetail from './MovieDetail';
import '../styles/NominateItem.css';

export default function NominateItem(props) {
  const [dialog, toggle] = useState(false);

  const handleToggle = () => {
    toggle(!dialog);
  };
  return (
    <ListItem hover className="row">
      <ListItemIcon className="drag-handle">
        <DragHandle />
      </ListItemIcon>
      <ListItemText onClick={handleToggle}>
        <Typography className="nom-title">{props.Title}</Typography>
        <Typography className="nom-year">{props.Year}</Typography>
      </ListItemText>
      <ListItemIcon className="remove">
        <IconButton color="inherit" onClick={() => props.denominate(props)}>
          <RemoveCircleOutline fontSize="small" />
        </IconButton>
      </ListItemIcon>
      <MovieDetail open={dialog} handleClose={handleToggle} id={props.imdbID} />
    </ListItem>
  );
}
