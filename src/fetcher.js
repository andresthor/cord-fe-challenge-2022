import axios from 'axios';

// INSERT API KEY HERE
const api_key = process.env.REACT_APP_IMDB_API_KEY || '';
const params = { api_key };

const API_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

const popularMovies = `${API_URL}/movie/popular`;
const movieGenres = `${API_URL}/genre/movie/list`;
const searchMovies = `${API_URL}/search/movie`;

const NO_RESULTS = { results: [] };

export const getImageUrl = (id) => `${IMAGE_URL}/${id}`;

export async function getPopularMovies() {
  try {
    const response = await axios.get(popularMovies, { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieGenres() {
  try {
    const response = await axios.get(movieGenres, { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovies(query, year) {
  if (query === '') {
    return NO_RESULTS;
  }

  const params = { api_key, year, query: encodeURIComponent(query) };

  try {
    const response = await axios.get(searchMovies, { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
