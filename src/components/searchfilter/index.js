import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import * as colors from '../../colors';
import ExpandableFilter from '../accordionfilter';
import SearchBar from '../../components/searchbar';

import SearchIcon from '../../images/search-icon-yellow.png';
import YearIcon from '../../images/year-icon.png';

export default function SearchFilters({
  genres,
  ratings,
  languages,
  searchMovies,
}) {
  const [keyword, setKeywords] = useState(null);
  const [year, setYear] = useState('');

  useEffect(() => {
    if (keyword === null) return;

    searchMovies(keyword, year);
  }, [keyword, year, searchMovies]);

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword_search_input"
          type="text"
          icon={{ src: SearchIcon, alt: 'Magnifying glass' }}
          placeholder="Search for movies"
          onChange={setKeywords}
        />
        <SearchBar
          id="year_search_input"
          type="number"
          icon={{ src: YearIcon, alt: 'Calendar icon' }}
          placeholder="Year of release"
          onChange={setYear}
        />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movies</CategoryTitle>
        {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories */}
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;
