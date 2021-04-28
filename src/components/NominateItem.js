import React, { useState } from 'react';
import { TableCell, TableRow, Button } from '@material-ui/core';
import { RemoveFromQueue } from '@material-ui/icons';
import MovieDetail from './MovieDetail';
import '../styles/NominateItem.css';

export default function NominateItem(props) {
  const [dialog, toggle] = useState(false);

  const handleToggle = () => {
    toggle(!dialog);
  };
  return (
    <TableRow hover className="row">
      <TableCell onClick={handleToggle} className="nom-title">
        {props.Title}
      </TableCell>
      <TableCell onClick={handleToggle} className="nom-year">
        {props.Year}
      </TableCell>
      <TableCell>
        <Button onClick={() => props.denominate(props)}>
          <RemoveFromQueue />
        </Button>
      </TableCell>
      <MovieDetail open={dialog} handleClose={handleToggle} id={props.imdbID} />
    </TableRow>
  );
}
