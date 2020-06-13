/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { COLORS, STYLES } from '../constants';

const btnStyle = css`
  margin-right: 2rem;
  font-family: ${STYLES.font};
  color: ${COLORS.blue};
  background: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  border: 2px solid ${COLORS.blue};
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.blue};
    color: ${COLORS.tan};
    transform: translateY(-3px);
    box-shadow: 0px 2px 4px ${COLORS['green-dark']};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 1px 2px ${COLORS['green-dark']};
  }
`;

const GenericButton = (props) => {
  return (
    <button css={btnStyle} onClick={() => props.onClick()}>
      {props.children}
    </button>
  );
};

export default GenericButton;
