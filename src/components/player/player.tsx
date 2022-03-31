import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import MovieContext from '../movie-context/movie-context';

type Props = {
  url?: string;
  onClose?: () => void;
};

const Player: React.FC<Props> = () => {
  const { movie } = useContext(MovieContext);
  return (
    <div className="player">
      <ReactPlayer
        height="60vh"
        width="100%"
        url={
          movie ? movie.trailer : 'https://www.youtube.com/watch?v=WTc2xXcJFwU&ab_channel=Netflix'
        }
      />
    </div>
  );
};

export default Player;
