import {
  Button,
  Dialog,
  DialogTitle,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GetMovieDetail } from '../utils/omdb';
import '../styles/MovieDetail.css';

export default function MovieDetail(props) {
  const [movie, update] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await GetMovieDetail(props.id);
      if (res.Response === 'True') {
        update(res);
      }
    }
    if (props.open) fetchData();
  }, [props.open, props.id]);

  const getLink = () => {
    const link = `https://www.imdb.com/title/${movie.imdbID}/`;
    return link;
  };
  return (
    <Dialog onClose={props.handleClose} open={props.open}>
      <DialogTitle>
        <Typography>{movie.Title}</Typography>
      </DialogTitle>
      <div className="dialog">
        <div className="intro">
          <img src={movie.Poster} alt={props.Title + props.Year} />
          <Typography className="plot">{movie.Plot}</Typography>
          <Typography className="rating">
            IMDB Rating: {movie.imdbRating}
          </Typography>
        </div>
        <Typography>Additional Information</Typography>
        <Paper className="details">
          <Typography>Year: {movie.Year}</Typography>
          <Typography>Rated: {movie.Rated}</Typography>
          <Typography>Released: {movie.Released}</Typography>
          <Typography>Genre: {movie.Genre}</Typography>
          <Typography>Director: {movie.Director}</Typography>
          <Typography>Actors: {movie.Actors}</Typography>
          <Typography>Country: {movie.Country}</Typography>
          <Typography>Awards: {movie.Awards}</Typography>
        </Paper>
        <Button
          href={getLink()}
          color="primary"
          target="_blank"
          className="link"
        >
          go to IMDb
        </Button>
      </div>
    </Dialog>
  );
}
