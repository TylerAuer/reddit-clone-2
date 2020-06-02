/** @jsx jsx */
import React from 'react';
import { css, jsx, keyframes } from '@emotion/core';
import theme from '../theme';

const hover = keyframes`
  0% {
    transform: translateX(3rem) scale(0, 0)
  }

  75% {
    transform: translateX(-.2rem) scale(1.1, 1.1)
  }

  100% {
  }
`;

const aStyle = css`
  margin: 1rem;
  padding: 0.7rem 5rem;
  background: ${theme.colors.purple};
  border-radius: 10rem;
  border: 0.2rem solid ${theme.colors.pink};
  box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  display: inline-block;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-0.2rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  }
`;

const GenericButton = (props) => {
  return (
    <a css={aStyle} onClick={props.onClick}>
      {props.text}
    </a>
  );
};

export default GenericButton;
