import React, { useState } from "react";
import { TableCell, TableRow, IconButton } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import MovieDetail from "./MovieDetail";
import { Image } from "@material-ui/icons";

import "../styles/MovieItem.css";

export default function MovieItem(props) {
  const [dialog, toggle] = useState(false);

  const handleToggle = () => {
    toggle(!dialog);
  };
  const { nominate, ...other } = props;
  return (
    <TableRow hover className="row">
      {!props.mobile && (
        <TableCell onClick={handleToggle} className="movie-cell">
          {props.Poster !== "N/A" ? (
            <img
              src={props.Poster}
              alt={"N/A"}
              onClick={handleToggle}
              className="img"
            />
          ) : (
            <div>
              <Image />
            </div>
          )}
        </TableCell>
      )}
      <TableCell className="movie-title" onClick={handleToggle}>
        {props.Title}
      </TableCell>
      <TableCell onClick={handleToggle}>{props.Year}</TableCell>
      <TableCell>
        <IconButton
          onClick={() => props.nominate(other)}
          disabled={props.nominated || !props.nominatable}
          className="add"
        >
          <AddCircleOutline fontSize="medium" />
        </IconButton>
      </TableCell>
      <MovieDetail
        open={dialog}
        handleClose={handleToggle}
        id={props.imdbID}
        mobile={props.mobile}
        movie={other}
        nominate={props.nominate}
        nominated={props.nominated || !props.nominatable}
      />
    </TableRow>
  );
}
