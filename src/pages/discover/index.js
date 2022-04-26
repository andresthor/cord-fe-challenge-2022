import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import * as fetcher from '../../fetcher';

import SearchFilters from '../../components/searchfilter';
import MovieList from '../../components/movielist';

const initialState = {
  keyword: '',
  year: 0,
  results: [],
  totalCount: 0,
  genreOptions: [],
  ratingOptions: [
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ],
  languageOptions: [
    { id: 'GR', name: 'Greek' },
    { id: 'EN', name: 'English' },
    { id: 'RU', name: 'Russian' },
    { id: 'PO', name: 'Polish' },
  ],
};

const Discover = () => {
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const { genreOptions, languageOptions, ratingOptions } = initialState;

  // TODO: Preload and set the popular movies and movie genres when page loads
  useEffect(() => {
    getPopularMovies(setResults);
  }, []);

  useEffect(() => {
    setTotalCount(results.length);
  }, [results]);

  // TODO: Update search results based on the keyword and year inputs

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle>
      <TotalCount>{totalCount} results</TotalCount>
      <MovieFilters>
        <SearchFilters
          genres={genreOptions}
          ratings={ratingOptions}
          languages={languageOptions}
          searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
        />
      </MovieFilters>
      <MovieResults>
        <MovieList movies={results} genres={genreOptions || []} />
      </MovieResults>
    </DiscoverWrapper>
  );
};

const getPopularMovies = (cb) => {
  fetcher.getPopularMovies().then(({ results }) => cb(results));
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
`;

const TotalCount = styled.strong`
  display: block;
`;

export default Discover;
