import React, { useEffect, useCallback, useReducer } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

import * as fetcher from '../../fetcher';

import SearchFilters from '../../components/searchfilter';
import MovieList from '../../components/movielist';
import { init, reducer } from './reducer';

const Discover = () => {
  const [state, dispatch] = useReducer(reducer, null, init);
  const { results, totalCount, genreOptions, languageOptions, ratingOptions } =
    state;

  const setValue = (type) => (value) => {
    dispatch({ type, payload: value });
  };

  useEffect(() => {
    getMovieGenres(setValue('GENRE'));
    getPopularMovies(setValue('RESULTS'));
  }, []);

  useEffect(() => {
    setValue('COUNT')(results.length);
  }, [results]);

  const searchMovies = useCallback((keyword, year) => {
    getMovies(setValue('RESULTS'), keyword, year);
  }, []);

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle>
      <TotalCount>{totalCount} results</TotalCount>
      <MovieFilters>
        <SearchFilters
          genres={genreOptions}
          ratings={ratingOptions}
          languages={languageOptions}
          searchMovies={searchMovies}
        />
      </MovieFilters>
      <MovieResults>
        <MovieList movies={results} genres={genreOptions} />
      </MovieResults>
    </DiscoverWrapper>
  );
};

const getPopularMovies = (cb) => {
  fetcher.getPopularMovies().then(({ results }) => cb(results));
};

const getMovieGenres = (cb) => {
  fetcher.getMovieGenres().then(({ genres }) => cb(genres));
};

const getMovies = debounce((cb, query, year) => {
  _getMovies(cb, query, year);
}, 250);

const _getMovies = (cb, query, year) => {
  fetcher.getMovies(query, year).then(({ results }) => cb(results));
};

const DiscoverWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 35px;

  @media all and (min-width: 720px) {
    display: block;
  }
`;

const MovieResults = styled.div`
  display: inline-block;
  width: 100%;

  @media all and (min-width: 720px) {
    width: calc(100% - 295px);
  }
  @media all and (max-width: 1024px) {
    order: 3;
  }
`;

const MovieFilters = styled.div`
  width: 100%;

  @media all and (min-width: 720px) {
    width: 280px;
    float: right;
    margin-top: 15px;
  }
`;

const MobilePageTitle = styled.h1`
  display: none;

  @media all and (max-width: 720px) {
    display: block;
    margin: 0 60px;
  }
`;

const TotalCount = styled.strong`
  display: block;

  @media all and (max-width: 1024px) {
    order: 2;
    margin: 20px 0 20px 60px;
  }
  @media all and (max-width: 720px) {
    margin: 0;
  }
`;

export default Discover;
