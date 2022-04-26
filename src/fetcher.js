import axios from 'axios';

// INSERT API KEY HERE
const api_key =
  console.log(process.env.REACT_APP_IMDB_API_KEY) || process.env.REACT_APP_IMDB_API_KEY || '';
const params = { api_key };

const API_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

const popularMovies = `${API_URL}/movie/popular`;
// const movieGenres = `${API_URL}/genre/movie/list`;
// const searchMovies = `${API_URL}/search/movie`;

export const getImageUrl = (id) => `${IMAGE_URL}/${id}`;

export async function getPopularMovies() {
  try {
    const response = await axios.get(popularMovies, { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
