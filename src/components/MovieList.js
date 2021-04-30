import React, { Fragment } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  TableFooter,
  TablePagination,
} from "@material-ui/core";
import { Sms, Beenhere, Search } from "@material-ui/icons";
import MovieItem from "./MovieItem";
import "../styles/MovieList.css";
import LoadingOverlay from "react-loading-overlay";

export default function MovieList(props) {
  const tableHeader = props.mobile
    ? ["Title", "Year of Release", "Nominate"]
    : ["Poster", "Title", "Year of Release", "Nominate"];
  return (
    <div className={`movie_container${!props.mobile ? "-desktop" : ""}`}>
      <h5 className="movie_container-title">
        {<Search className="search-icon" />} Your search result:{" "}
        {props.totalResult} item(s)
      </h5>
      <Paper className="paper" elevation={4}>
        {!!props.totalNomination && (
          <Toolbar>
            {props.totalNomination < 5 ? (
              <Fragment>
                <Sms className="sms-icon" color="inherit" />
                <h6 className="banner">
                  {`You have selected ${props.totalNomination} movie(s) for
                  nominations.`}
                </h6>
              </Fragment>
            ) : (
              <Fragment>
                <Beenhere className="sms-icon banner-completed" />
                <h5 className="banner-completed">
                  Your nomination list is ready!
                </h5>
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
                    mobile={props.mobile}
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
