/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../constants';
import { LoginContext } from '../contexts/LoginContext';
import Modal from './Modal';
import getUserInfo from '../functions/getUserInfo';

const loginStyles = css`
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  h2 {
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    font-size: 5rem;
    display: inline-block;
    padding-bottom: 1rem;
    border-bottom: 2px solid ${COLORS['green-light']};
  }

  label {
    color: ${COLORS.tan};
    display: block;
    font-size: 2rem;
  }

  input {
    width: 100%;
    font-size: 2rem;
    font-weight: 500;
    padding: 1rem;
    background: none;
    color: white;
    border: 2px solid ${COLORS['green-light']};
    border-radius: 1rem;
    margin-bottom: 2rem;
    outline: none;
  }

  input:focus {
    border-color: ${COLORS.orange};
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }

  input::placeholder {
    color: ${COLORS['green-light']};
    opacity: 0.5;
    font-weight: normal;
    text-shadow: none;
  }
`;

const ModalLogin = (props) => {
  const [loginState, setLoginState] = React.useContext(LoginContext);

  const submit = (event) => {
    event.preventDefault();
    const elems = event.target.elements;
    const username = elems['username'].value;
    // const password = elems['password'].value;

    getUserInfo(username, setLoginState);
    props.toggleModal();
  };

  return (
    <Modal toggleModal={props.toggleModal}>
      <div css={loginStyles}>
        <h2>Login</h2>
        <form onSubmit={submit} id="formId">
          <label htmlFor="username">
            <b>Username </b>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder={'Username'}
          />{' '}
          <br />
          <label htmlFor="password">
            <b>Password </b>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder={'Password'}
          />{' '}
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalLogin;
