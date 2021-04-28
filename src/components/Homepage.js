import React, { useEffect, useState } from 'react';
import { Button, Paper, TextField } from '@material-ui/core';
import MovieList from './MovieList';
import NominationList from './NominationList';
import { loadState, saveState } from '../utils/localStorage';
import { getMoviesByTitle } from '../utils/omdb';
import {
  processResponses,
  processNomination,
  denominate,
} from '../utils/processResponses';
import '../styles/Homepage.css';
import { MovieFilter } from '@material-ui/icons';
import arrayMove from 'array-move';

export default function Homepage(props) {
  const [searchField, update] = useState('');
  const [error, updateError] = useState('');

  const [result, updateResult] = useState([]);
  const [totalResult, updateTotalResult] = useState(0);
  const [nominatedList, updateNomination] = useState(
    loadState('nominations') || []
  );
  const [page, changePage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    saveState('nominations', nominatedList);
  }, [nominatedList]);

  const handleChangePage = (page) => {
    handleSearch(page);
    changePage(page);
  };

  const handleSearch = async (newPage) => {
    newPage = page;
    updateError('');
    if (!searchField) return;
    setLoading(true);
    const res = await getMoviesByTitle(searchField, newPage + 1);
    if (res.Response === 'True') {
      const movies = processResponses(res.Search, nominatedList);
      updateResult(movies);
      updateTotalResult(res.totalResults);
    }
    setLoading(false);
    if (res.Error) updateError(res.Error);
  };

  const reprocess = (newList) => {
    const newResult = processResponses(result, newList);
    updateResult(newResult);
  };

  const handleDenominate = (movie) => {
    const newList = denominate(movie, nominatedList);
    updateNomination(newList);
    reprocess(newList);
  };

  const handleNominate = (movie) => {
    const newList = processNomination(movie, nominatedList);
    updateNomination(newList);
    reprocess(newList);
  };

  const handleClear = () => {
    update('');
    updateResult([]);
    updateTotalResult(0);
    changePage(0);
    updateError('');
  };

  const handleNomSave = () => {
    saveState('nominations', nominatedList);
  };
  const handleNomClear = () => {
    updateNomination([]);
    reprocess([]);
  };

  const onDrop = ({ removedIndex, addedIndex }) => {
    updateNomination((items) => arrayMove(items, removedIndex, addedIndex));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };
  return (
    <div className="homepage">
      <h3>The Shoppies: Movie awards for entrepreneurs</h3>
      <h6>Find your Top 5 Movies and add them to your Nomination list.</h6>
      <span>
        <h5 className="title">Find a movie {<MovieFilter />}</h5>
      </span>
      <Paper className="search">
        <div className="paper">
          <TextField
            id="outlined-basic"
            label="Enter a movie title"
            variant="outlined"
            placeholder="The Wolf of Wall Street"
            value={searchField}
            onChange={(e) => update(e.target.value)}
            fullWidth
            onKeyDown={handleKeyPress}
          />
          <p className="error">{error}</p>
          <div className="buttons">
            <Button
              onClick={() => {
                handleClear();
              }}
              variant="outlined"
            >
              Clear
            </Button>
            <Button
              onClick={handleSearch}
              variant="outlined"
              disabled={!searchField}
            >
              Search
            </Button>
          </div>
        </div>
      </Paper>
      <div className="list">
        <MovieList
          loading={loading}
          totalResult={totalResult}
          results={result}
          nominate={handleNominate}
          totalNomination={nominatedList.length}
          handleChangePage={handleChangePage}
          page={page}
          rowsPerPage={10}
        />
        <NominationList
          list={nominatedList}
          denominate={handleDenominate}
          onDrop={onDrop}
          clear={handleNomClear}
          save={handleNomSave}
        />
      </div>
    </div>
  );
}
