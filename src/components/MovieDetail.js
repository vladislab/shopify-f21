import {
  AppBar,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState, Fragment } from 'react';
import { GetMovieDetail } from '../utils/omdb';
import '../styles/MovieDetail.css';
import { Close, Image } from '@material-ui/icons';
import LoadingOverlay from 'react-loading-overlay';

export default function MovieDetail(props) {
  const [movie, update] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await GetMovieDetail(props.id);
      if (res.Response === 'True') {
        update(res);
      }
      setLoading(false);
    }
    if (props.open) fetchData();
  }, [props.open, props.id]);

  const getLink = () => {
    const link = `https://www.imdb.com/title/${movie.imdbID}/`;
    return link;
  };
  return (
    <Dialog
      onClose={props.handleClose}
      open={props.open}
      fullScreen={props.mobile}
      className="dialog-container"
    >
      {props.mobile && (
        <AppBar color="inherit" className="dialog-bar">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.handleClose}
            >
              <Close />
            </IconButton>
            <DialogTitle>
              <Typography>{movie.Title}</Typography>
            </DialogTitle>
          </Toolbar>
        </AppBar>
      )}
      <LoadingOverlay active={loading} spinner>
        {!loading && (
          <Fragment>
            <DialogTitle>
              <Typography>{movie.Title}</Typography>
            </DialogTitle>
            <div className="dialog">
              <div className="intro">
                {movie.Poster !== 'N/A' ? (
                  <img src={movie.Poster} alt={'N/A'} />
                ) : (
                  <Image />
                )}
                {movie.Plot !== 'N/A' && (
                  <Typography className="plot">{movie.Plot}</Typography>
                )}
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
          </Fragment>
        )}
      </LoadingOverlay>
    </Dialog>
  );
}
