/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS, STYLES } from '../constants';
import { LoginContext } from '../contexts/LoginContext';
import ProfileMenu from './ProfileMenu';
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
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showAccountMenu, setShowAccountMenu] = React.useState(false);
  const [loginState, setLoginState] = React.useContext(LoginContext);

  const toggleAccountMenu = () => {
    showAccountMenu ? setShowAccountMenu(false) : setShowAccountMenu(true);
  };

  const toggleLoginModal = () => {
    showLoginModal ? setShowLoginModal(false) : setShowLoginModal(true);
  };

  const accountBtn = () => {
    // If logged in
    if (loginState) {
      return (
        <button
          className={'logout-btn'}
          onClick={() => setShowAccountMenu(true)}
        >
          {loginState + ' \u2630'}
        </button>
      );
    } else {
      // If logged out
      return (
        <button onClick={() => toggleLoginModal()} className={'login-btn'}>
          Login
        </button>
      );
    }
  };

  return (
    <React.Fragment>
      <header css={headerStyle}>
        <div className="logo">{'{ 2R2F }'}</div>
        <nav>
          <ul>
            <li className={'login-state'}>{accountBtn()}</li>
          </ul>
        </nav>
      </header>
      {showLoginModal && <ModalLogin toggleModal={toggleLoginModal} />}
      <ProfileMenu show={showAccountMenu} displayToggle={setShowAccountMenu} />
    </React.Fragment>
  );
};

export default NavBar;
