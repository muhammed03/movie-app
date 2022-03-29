import React from 'react';

import { movies } from '../../mock';

const MovieContext = React.createContext(movies[0]);

export default MovieContext;
