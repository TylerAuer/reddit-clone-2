/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS, STYLES } from '../constants';
import { LoginContext } from '../contexts/LoginContext';
import ProfileMenu from './ProfileMenu';
import ModalLogin from './ModalLogin';
import ModalSignUp from './ModalSignUp';

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
    font-family: ${STYLES.font};
    background: none;
    color: ${COLORS.blue};
    font-size: 1.6rem;
    font-weight: 700;
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
`;

const NavBar = (props) => {
  const [showAccountMenu, setShowAccountMenu] = React.useState(false);
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showSignUpModal, setShowSignUpModal] = React.useState(false);
  const [loginState] = React.useContext(LoginContext);

  const toggleAccountMenu = () => {
    showAccountMenu ? setShowAccountMenu(false) : setShowAccountMenu(true);
  };

  const toggleLoginModal = () => {
    showLoginModal ? setShowLoginModal(false) : setShowLoginModal(true);
  };

  const toggleSignUpModal = () => {
    showSignUpModal ? setShowSignUpModal(false) : setShowSignUpModal(true);
  };

  const accountBtns = () => {
    // If logged in
    if (loginState) {
      return (
        <li className={'login-state'}>
          <button onClick={() => toggleAccountMenu()}>
            {loginState.username + ' \u2630'}
          </button>
        </li>
      );
    } else {
      // If logged out
      return (
        <React.Fragment>
          <li className={'login-state'}>
            <button onClick={() => toggleSignUpModal()} className={'login-btn'}>
              Sign Up
            </button>
          </li>
          <li className={'login-state'}>
            <button onClick={() => toggleLoginModal()} className={'login-btn'}>
              Login
            </button>
          </li>
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <header css={headerStyle}>
        <div className="logo">{'{ 2R2F }'}</div>
        <nav>
          <ul>{accountBtns()}</ul>
        </nav>
      </header>
      {showLoginModal && <ModalLogin toggleModal={toggleLoginModal} />}
      {showSignUpModal && <ModalSignUp toggleModal={toggleSignUpModal} />}
      <ProfileMenu show={showAccountMenu} displayToggle={setShowAccountMenu} />
    </React.Fragment>
  );
};

export default NavBar;
