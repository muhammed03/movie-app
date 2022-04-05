import React, { useState } from 'react';
import Player from '../../player/player';
import MoviesList from '../../movie-list/movies-list';
import { movies } from '../../../mock';
import { Movie } from '../../../types';
import MovieContext from '../../movie-context/movie-context';

const Main = () => {
  const [movie, setSelectedMovie] = useState<Movie | null>(null);

  const changeMovie = (m: Movie | null) => {
    setSelectedMovie(m);
  };

  return (
    <MovieContext.Provider value={{ movie, changeMovie }}>
      <div className="main">
        <Player url={movie?.trailer} />
        <MoviesList movies={movies} />
      </div>
    </MovieContext.Provider>
  );
};

export default Main;
