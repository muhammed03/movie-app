import React from 'react';

export interface UserI {
  login: string;
  firstname: string;
  lastname: string;
  avatar: string;
}

export const userStates = {
  LOGGED_IN: 'LOGGED_IN',
  LOGGED_OUT: 'LOGGED_OUT',
};

const LoginContext = React.createContext<{
  userState: string;
  userHandler: (user: string) => void;
}>({ userState: userStates.LOGGED_OUT, userHandler: () => null });

export default LoginContext;
