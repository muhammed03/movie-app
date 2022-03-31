import React from 'react';

import { Movie } from '../../types';

import MovieItem from '../movie-item/movie-item';
import style from './movies-list.module.scss';

type Props = {
  movies: Movie[];
};

const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className={style['movies-list']}>
      {movies.map((movie) => (
        <MovieItem movieData={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MoviesList;
