import React, { useState, useEffect } from 'react';
import Player from '../../player/player';
import MoviesList from '../../movie-list/movies-list';
import { Movie } from '../../../types';
import MovieContext from '../../movie-context/movie-context';
import AppService from '../../../services/app-service';

const appService = new AppService();

const Main = () => {
  const [movie, setSelectedMovie] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  const changeMovie = (m: Movie | null) => {
    setSelectedMovie(m);
  };

  useEffect(() => {
    appService
      .getAllMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((e) => console.log(e));
  }, []);

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
