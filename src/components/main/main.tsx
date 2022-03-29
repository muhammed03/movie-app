import React, { useState } from 'react';
import Player from '../player/player';
import MoviesList from '../movie-list/movies-list';
import { movies } from '../../mock';
import { Movie } from '../../types';

const Main = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const movieClickHandler = (v: Movie) => {
    setSelectedMovie(v);
  };

  const onClose = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="main">
      {selectedMovie ? <Player url={selectedMovie?.trailer} onClose={onClose} /> : <Player />}
      <MoviesList selectedId={selectedMovie?.id} onMovieClick={movieClickHandler} movies={movies} />
    </div>
  );
};

export default Main;
