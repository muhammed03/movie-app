import React from 'react';
import { Movie } from '../../types';

const MovieContext = React.createContext<{
  movie: Movie | null;
  changeMovie: (movie: Movie | null) => void;
}>({ movie: null, changeMovie: () => null });

export default MovieContext;
