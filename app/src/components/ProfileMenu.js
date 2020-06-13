/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS, STYLES } from '../constants';
import { LoginContext } from '../contexts/LoginContext';

const ProfileMenu = (props) => {
  const [loginState, setLoginState] = React.useContext(LoginContext);

  const hide = css`
    opacity: 0;
    transform: scale(0);
  `;

  const menu = css`
    position: absolute;
    opacity: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: radial-gradient(
      ${COLORS['green-light']},
      ${COLORS['green-medium']}
    );
    z-index: 100;
    transition: all 0.2s;

    .close-btn {
      position: absolute;
      top: 4rem;
      right: 6rem;
      font-size: 6rem;
      color: white;
      cursor: pointer;
    }

    .menu-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    ul {
      list-style: none;

      li {
        color: white;
        text-transform: uppercase;
        text-align: center;
        font-size: 3.5rem;
        margin-bottom: 2rem;
        padding: 1rem;
      }

      li:hover,
      li:active {
        background-color: white;
        color: ${COLORS['green-dark']};
        cursor: pointer;
      }
    }
  `;

  let style = props.show ? menu : [menu, hide];

  return (
    <div css={style}>
      <div className="close-btn" onClick={() => props.displayToggle(false)}>
        {'\u2715'}
      </div>
      <div className="menu-container">
        <ul>
          <li
            onClick={() => {
              setLoginState(false);
              props.displayToggle(false);
            }}
          >
            Logout
          </li>
          <li>Change user info</li>
          <li>See all posts</li>
          <li>Delete account</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileMenu;