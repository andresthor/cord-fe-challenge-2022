import React from 'react';
import styled from 'styled-components';

import * as colors from '../../colors';
import { getImageUrl } from '../../fetcher';

export default function MovieItem({ movie, genres }) {
  const genreString = getGenres(movie, genres).join(' | ');

  return (
    <MovieItemWrapper>
      <LeftCont>
        <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
      </LeftCont>
      <RightCont>
        <Header>
          <Title>{movie.title}</Title>
          <Rating>{movie.vote_average.toFixed(1)}</Rating>
        </Header>
        <Genres>{genreString}</Genres>
        <Overview>{movie.overview}</Overview>
        <Date>
          <span>{movie.release_date}</span>
        </Date>
      </RightCont>
    </MovieItemWrapper>
  );
}

const getGenres = (movie, genres) =>
  movie.genre_ids
    .map((id) => genres.find((genre) => genre.id === id))
    .map(({ name }) => name);

const MovieItemWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  background-color: white;
  border-radius: 5px;
  margin: 15px 0;
  padding: 20px;
`;

const LeftCont = styled.div`
  display: flex;

  > img {
    width: 130px;
    height: fit-content;
  }
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.4em;
`;

const Rating = styled.div`
  background-color: ${colors.primaryColor};
  color: white;
  height: fit-content;
  padding: 0.25em;
  border-radius: 20%;
`;

const Genres = styled.p`
  margin: 0;
  font-size: 0.7em;
  color: ${colors.primaryColor};
`;

const Overview = styled.p`
  font-size: 0.85em;
`;

const Date = styled.p`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  margin: 0;
  font-size: 0.7em;
  color: ${colors.primaryColor};
`;
