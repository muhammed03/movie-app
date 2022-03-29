import React, { useState } from 'react';
import Player from '../player/player';
import MoviesList from '../movie-list/movies-list';
import { movies } from '../../mock';
import { Movie } from '../../types';
import MovieContext from '../movie-context/movie-context';

const Main = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie>(movies[0]);

  const movieClickHandler = (v: Movie) => {
    setSelectedMovie(v);
  };

  return (
    <MovieContext.Provider value={selectedMovie}>
      <div className="main">
        <Player url={selectedMovie.trailer} />
        <MoviesList
          selectedId={selectedMovie?.id}
          onMovieClick={movieClickHandler}
          movies={movies}
        />
      </div>
    </MovieContext.Provider>
  );
};

export default Main;
