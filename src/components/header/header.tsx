import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginContext, { userStates } from '../login-context/login-context';
import './style.scss';

const Header: React.FC = (): JSX.Element => {
  const { userState, userHandler } = useContext(LoginContext);

  const content =
    userState !== userStates.LOGGED_IN ? (
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    ) : (
      <li className="nav-item dropdown">
        <img
          className="nav-link dropdown-toggle dropdown"
          data-bs-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          width="50"
          src="https://kirensk.net/ui/img/avatar.png"
          alt="avatar"
        />
        <div className="dropdown-list" data-bs-popper="none">
          <button className="dropdown-item">User profile</button>
          <button className="dropdown-item" onClick={() => userHandler(userStates.LOGGED_OUT)}>
            Log out
          </button>
        </div>
      </li>
    );
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Logo
        </Link>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Movies
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/actors">
                Actors
              </Link>
            </li>
            {content}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
