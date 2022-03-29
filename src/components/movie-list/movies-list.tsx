import React from 'react';

import { Movie } from '../../types';

import MovieItem from '../movie-item/movie-item';
import './movies-list.scss';

type Props = {
  movies: Movie[];
  selectedId?: number;
  onMovieClick: (v: Movie) => void;
};

const MoviesList: React.FC<Props> = ({ movies, selectedId, onMovieClick }) => {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieItem
          movie={movie}
          isSelected={movie.id === selectedId}
          onItemClick={onMovieClick}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default MoviesList;
