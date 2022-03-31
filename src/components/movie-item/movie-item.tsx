import React, { useContext, useState } from 'react';

import MovieContext from '../movie-context/movie-context';

import { Movie } from '../../types';
import './movie-item.scss';

import playButtonImg from '../../assets/play-button.svg';
import pauseButtonImg from '../../assets/pause-button.svg';
import watchLaterBtnImg from '../../assets/watch-later.svg';
import tickBtnImg from '../../assets/tick.svg';

type Props = {
  movieData: Movie;
};

const MovieItem: React.FC<Props> = ({ movieData }) => {
  const { movie, changeMovie } = useContext(MovieContext);

  const [state, setState] = useState({
    loading: false,
    selected: false,
    addedToWatchLater: false,
  });

  const watchLaterClick = () => {
    setState((newState) => ({
      ...newState,
      addedToWatchLater: !state.addedToWatchLater,
    }));
  };

  const onPlayButtonClick = () => {
    changeMovie(movieData);
    setState((newState) => ({
      ...newState,
      selected: !state.selected,
    }));
  };
  const isSelected = movieData.id === movie?.id;

  const playerBtn = isSelected ? (
    <img className="movie-player-img" src={pauseButtonImg} alt="pause" />
  ) : (
    <img className="movie-player-img" src={playButtonImg} alt="play" />
  );

  const watchLaterBtn = state.addedToWatchLater ? (
    <img src={watchLaterBtnImg} alt="watch-later" />
  ) : (
    <img src={tickBtnImg} alt="watch-later" />
  );

  return (
    <div className="movie-item">
      <img className="movie-img" src={movieData.image} alt="movie" />
      <div className="movie-text">
        <h3>{movieData.title}</h3>
      </div>
      <div className="movie-player-container">
        <button onClick={onPlayButtonClick} className="movie-player-btn movie-item-btn">
          {playerBtn}
        </button>
      </div>
      <div className="watch-later-container">
        <button onClick={watchLaterClick} className="watch-later-btn movie-item-btn">
          {watchLaterBtn}
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
