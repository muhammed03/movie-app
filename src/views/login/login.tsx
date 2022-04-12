import React, { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';
import LoginContext, { userStates } from '../../contexts/login-context/login-context';

const Login: React.FC = () => {
  const navigateHook = useNavigate();
  const { userHandler } = useContext(LoginContext);

  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const onAutoTypeBtnClick = () => {
    setState({
      username: 'Mike',
      password: 'password',
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    userHandler(userStates.LOGGED_IN);
    navigateHook('/');
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <fieldset>
          <legend>Login</legend>
        </fieldset>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="form-label mt-4">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={state.username}
            onChange={() => null}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={state.password}
            onChange={() => null}
          />
        </div>
        <div className="form-submit">
          <button type="button" onClick={onAutoTypeBtnClick} className="btn btn-primary submit-btn">
            Auto type
          </button>
          <button type="submit" className="btn btn-primary submit-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
