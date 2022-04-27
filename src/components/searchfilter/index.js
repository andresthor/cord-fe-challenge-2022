import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import ExpandableFilter from '../accordionfilter';
import SearchBar from '../../components/searchbar';

import SearchIcon from '../../images/search-icon-yellow.png';
import YearIcon from '../../images/year-icon.png';
import { lightBackground } from '../../colors';

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
        <NoMobile>
          <SearchBar
            id="year_search_input"
            type="number"
            icon={{ src: YearIcon, alt: 'Calendar icon' }}
            placeholder="Year of release"
            onChange={setYear}
          />
        </NoMobile>
      </SearchFiltersCont>
      <NoMobile>
        <SearchFiltersCont>
          <CategoryTitle>Movies</CategoryTitle>
          <ExpandableFilter items={genres} title={'Select genre(s)'} />
          <ExpandableFilter items={ratings} title={'Select min. vote'} />
          <ExpandableFilter items={languages} title={'Select language'} />
        </SearchFiltersCont>
      </NoMobile>
    </FiltersWrapper>
  );
}

const NoMobile = styled.span`
  @media all and (max-width: 720px) {
    display: none;
  }
`;

const FiltersWrapper = styled.div`
  position: relative;
  order: 1;
  @media all and (max-width: 1024px) {
    order: 2;
  }
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

  @media all and (max-width: 720px) {
    background-color: ${lightBackground};
    padding: 20px 0;
  }
`;

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;
