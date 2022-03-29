import React from 'react';

import './header.scss';
const Header: React.FC = (): JSX.Element => {
  return (
    <div className="header">
      <div className="header__logo">LOGO</div>
      <div className="header__links">
        <a className="header__link" href="/">
          Movies
        </a>
        <a className="header__link" href="#actors">
          Actors
        </a>
      </div>
    </div>
  );
};

export default Header;
