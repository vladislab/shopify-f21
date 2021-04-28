import React, { Fragment } from 'react';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  TableFooter,
  TablePagination,
} from '@material-ui/core';
import { Sms, Beenhere, Search } from '@material-ui/icons';
import MovieItem from './MovieItem';
import '../styles/MovieList.css';
import LoadingOverlay from 'react-loading-overlay';

export default function MovieList(props) {
  const tableHeader = ['Poster', 'Title', 'Year of Release', 'Nominate'];
  return (
    <div className="movie_container">
      <h6 className="movie_container-title">
        {<Search />} Your search result: {props.totalResult} item(s)
      </h6>
      <Paper className="paper">
        {!!props.totalNomination && (
          <Toolbar>
            {props.totalNomination < 5 ? (
              <Fragment>
                <Sms className="sms-icon" />
                <Typography className="banner">
                  {`You have selected ${props.totalNomination} movie(s) for
                  nominations.`}
                </Typography>
              </Fragment>
            ) : (
              <Fragment>
                <Beenhere className="sms-icon banner-completed" />
                <Typography className="banner-completed">
                  Your nomination list is ready!
                </Typography>
              </Fragment>
            )}
          </Toolbar>
        )}

        <LoadingOverlay active={props.loading} spinner>
          <Table>
            <TableHead>
              <TableRow>
                {tableHeader.map((header) => (
                  <TableCell>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.results &&
                props.results.map((movie) => (
                  <MovieItem
                    {...movie}
                    nominate={props.nominate}
                    nominatable={props.totalNomination <= 4}
                  />
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10]}
                  colSpan={3}
                  count={+props.totalResult}
                  rowsPerPage={props.rowsPerPage}
                  page={props.page}
                  onChangePage={(e, newPage) => props.handleChangePage(newPage)}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </LoadingOverlay>
      </Paper>
    </div>
  );
}
