import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;
const PATH = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export function getMoviesByTitle(title, page) {
  const query = title.trim().replace(' ', '+');

  let path = PATH + `&s=${query}&type=movie&page=${page}`;
  let response = undefined;
  response = axios
    .get(path)
    .then((res) => res.data)
    .then((data) => data)
    .catch((e) => {
      console.log(e.response);
      return e.response.data;
    });
  return response;
}

export function GetMovieDetail(id) {
  const query = id;

  let path = PATH + `&i=${query}`;
  let response = undefined;
  response = axios
    .get(path)
    .then((res) => res.data)
    .then((data) => data)
    .catch((e) => {
      console.log(e.response);
      return e.response.data;
    });
  return response;
}
