/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS, FEATURES } from '../constants';
import { LoginContext } from '../contexts/LoginContext';
import Modal from './Modal';
import ModalLogin from './ModalLogin';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  color: ${COLORS.blue};

  ul li {
    display: inline-block;
    margin: 0.5rem;
  }

  button,
  button:active,
  button:focus {
    background: none;
    color: ${COLORS.blue};
    font-size: 1.6rem;
    font-weight: bold;
    border: none;
    border: 2px solid ${COLORS.blue};
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    background-color: ${COLORS.blue};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0px 2px 4px ${COLORS['green-dark']};
  }

  button:active {
    transform: translateY(1px);
    box-shadow: 0px 1px 2px ${COLORS['green-dark']};
  }

  .logo {
    color: ${COLORS.orange};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    font-size: 4rem;
    font-weight: 600;
  }

  .greeting {
    color: ${COLORS['green-dark']};
    font-style: italic;
    margin-right: 2rem;
  }
`;

const NavBar = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const [loginState, setLoginState] = React.useContext(LoginContext);

  const accountBtn = () => {
    // If logged in
    if (loginState) {
      return (
        <React.Fragment>
          <li className={'login-state'}>
            <span className={'greeting'}>Hi {loginState}!</span>
            <button
              className={'logout-btn'}
              onClick={() => setLoginState(false)}
            >
              Logout
            </button>
          </li>
        </React.Fragment>
      );
    } else {
      // If logged out
      return (
        <li className={'login-state'}>
          <button onClick={() => setShowModal(true)} className={'login-btn'}>
            Login
          </button>
        </li>
      );
    }
  };

  const Login = (
    <Modal closeModal={() => setShowModal(false)}>
      <ModalLogin closeModal={() => setShowModal(false)} />
    </Modal>
  );

  return (
    <React.Fragment>
      <header css={headerStyle}>
        <div className="logo">{'{ 2R2F }'}</div>
        <nav>
          <ul>
            {accountBtn()}
            <li>
              <a href="#">
                <button className="menu">Menu</button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {showModal && Login}
    </React.Fragment>
  );
};

export default NavBar;
