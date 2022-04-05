import React, { useState } from 'react';
import './app.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../header/header';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import LoginContext, { userStates } from '../login-context/login-context';

const App = () => {
  const [userState, setUserState] = useState<string>(userStates.LOGGED_OUT);

  const userHandler = (user: string) => {
    setUserState(user);
  };

  return (
    <Router>
      <div className="App">
        <LoginContext.Provider value={{ userState, userHandler }}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>404, Not Found</h1>} />
          </Routes>
        </LoginContext.Provider>
      </div>
    </Router>
  );
};

export default App;
