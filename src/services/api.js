import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY = '9c0376cabd87eccbc4cd2b8625042663';
const END_POINTS = {
  trending: '/trending/movie/day',
  movieById: '/movie',
  movieCast: '/credits',
  movieReview: '/reviews',
  searchMovie: '/search/movie',
};
const params = {
  api_key: KEY,
  language: 'en-US',
};
export const getTrending = async () => {
  const responce = await axios.get(`${END_POINTS.trending}`, { params });
  return responce.data;
};

export const getMovieById = async movieId => {
  const responce = await axios.get(`${END_POINTS.movieById}/${movieId}`, {
    params,
  });
  return responce.data;
};

export const getMovieCast = async movieId => {
  const responce = await axios.get(
    `${END_POINTS.movieById}/${movieId}${END_POINTS.movieCast}`,
    {
      params,
    }
  );
  return responce.data;
};

export const getMovieReview = async movieId => {
  const responce = await axios.get(
    `${END_POINTS.movieById}/${movieId}${END_POINTS.movieReview}`,
    {
      params,
    }
  );
  return responce.data;
};

export const getSearchMovie = async query => {
  const responce = await axios.get(`${END_POINTS.searchMovie}?query=${query}`, {
    params,
  });
  return responce.data.results;
};
