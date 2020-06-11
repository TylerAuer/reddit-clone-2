/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { COLORS } from '../constants';

const btnStyle = css`
  margin: 0.5rem;
  padding: 0.5rem 2rem;
  background: none;
  background-color: ${COLORS.blue};
  border-radius: 4px;
  border: 1px solid ${COLORS.blue};
  box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${COLORS.white};
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
    <button css={btnStyle} onClick={() => props.onClick(props.featName)}>
      {props.text}
    </button>
  );
};

export default GenericButton;
