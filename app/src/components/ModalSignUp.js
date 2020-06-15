/** @jsx jsx */
//import React from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../constants';
import Modal from './Modal';
import UserCreate from './UserCreate';

const formStyles = css`
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  h2 {
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-size: 5rem;
    display: inline-block;
    padding-bottom: 1rem;
    border-bottom: 2px solid ${COLORS['green-light']};
  }

  p {
    color: ${COLORS.tan};
    padding-bottom: 2rem;
    font-size: 1.8rem;
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

const ModalSignUp = (props) => {
  return (
    <Modal toggleModal={props.toggleModal}>
      <div css={formStyles}>
        <UserCreate />
      </div>
    </Modal>
  );
};

export default ModalSignUp;
