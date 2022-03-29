import React from 'react';
import './app.scss';

import Header from '../header/header';
import Main from '../main/main';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

export default App;
