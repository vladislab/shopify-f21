export function processResponses(res = [], n_list = []) {
  const newRes = res.map((movie) => {
    const isNominated = n_list.some((m) => movie.imdbID === m.imdbID);
    if (isNominated) movie.nominated = true;
    else movie.nominated = false;
    return movie;
  });
  return newRes;
}

export function processNomination(movie = {}, n_list = []) {
  const isNominated = n_list.some((m) => movie.imdbID === m.imdbID);
  if (isNominated) return n_list;
  else return [...n_list, movie];
}

export function denominate(movie = {}, n_list = []) {
  const newRes = n_list.filter((m) => m.imdbID !== movie.imdbID);
  return newRes;
}
