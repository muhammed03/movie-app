import React from 'react';
import ReactPlayer from 'react-player';

type Props = {
  url?: string;
  onClose?: () => void;
};

const Player: React.FC<Props> = ({ url }) => {
  return (
    <div className="player">
      <ReactPlayer
        height="60vh"
        width="100%"
        url={url ? url : 'https://www.youtube.com/watch?v=WTc2xXcJFwU&ab_channel=Netflix'}
      />
    </div>
  );
};

export default Player;
