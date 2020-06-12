/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../constants';
import { LoginContext } from '../contexts/LoginContext';

const navStyle = css`
  background-color: ${COLORS.tan};
  width: 100%;
  height: auto;
  padding: 1.2rem 0.5rem 1.2rem 0.5rem;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  color: ${COLORS.blue};
  clear: both;

  div {
    display: inline-block;
  }

  button {
    background: none;
    background-color: ${COLORS.blue};
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
  }

  .login-greeting {
    padding-right: 2rem;
    color: ${COLORS['green-dark']};
    font-style: italic;
  }

  .nav-bar__left li,
  .nav-bar__right li {
    display: inline;
    padding: 1rem;
  }

  .nav-bar__right {
    float: right;
  }

  .nav-bar__icon {
    color: red;
    font-size: 3rem;
  }
`;

const NavBar = () => {
  //TODO: Extract account button to separate component
  const [loginState, setLoginState] = React.useContext(LoginContext);
  const accountBtn = () => {
    if (loginState) {
      return (
        <React.Fragment>
          <div className="login-greeting">Hi {loginState}!</div>
          <button
            className={'logout-btn'}
            onClick={() => {
              setLoginState(false);
            }}
          >
            Logout
          </button>
        </React.Fragment>
      );
    } else {
      return <button className={'login-btn'}>Login</button>;
    }
  };

  return (
    <nav css={navStyle}>
      <div className="nav-bar__left">
        <ul>
          <li className="nav-bar__icon">{'{ 2R2F }'}</li>
          <li className="nav-bar__tite">2 Reddit</li>
        </ul>
      </div>

      <div className="nav-bar__right">
        <ul>
          <li className="nav-bar__login-state">{accountBtn()}</li>
          <li>
            <button className="nav-bar__menu">Menu</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
