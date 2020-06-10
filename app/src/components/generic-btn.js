/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core';
import { COLORS } from '../constants';

const aStyle = css`
  margin: 1rem;
  padding: 0.5rem 2rem;
  background: ${COLORS.purple};
  border-radius: 5px;
  border: 0.2rem solid ${COLORS.white};
  box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${COLORS.blue};
  font-weight: 900;
  display: inline-block;
  cursor: pointer;
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
    <a css={aStyle} onClick={() => props.onClick(props.featName)}>
      {props.text}
    </a>
  );
};

export default GenericButton;
