import React from 'react';

import style from './header.module.scss';
const Header: React.FC = (): JSX.Element => {
  return (
    <div className={style.header}>
      <div className="header__logo">LOGO</div>
      <div className="header__links">
        <a className={style.header__link} href="/">
          Movies
        </a>
        <a className={style.header__link} href="#actors">
          Actors
        </a>
      </div>
    </div>
  );
};

export default Header;
