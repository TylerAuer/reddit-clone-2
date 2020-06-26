/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { COLORS } from '../constants';

const modal = css`
  position: relative;

  .modal__background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 100;
  }

  .modal__container {
    position: fixed;
    display: inline-block;
    min-width: 60%;
    background-color: ${COLORS['green-dark']};
    padding: 8rem 6rem;
    border-radius: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 200;
  }

  .modal__close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 2rem;
    font-weight: 800;
    color: ${COLORS.tan};
    cursor: pointer;
  }

  .modal__content h2 {
    text-align: center;
    text-transform: uppercase;
  }
`;

const Modal = (props) => {
  return (
    <div css={modal}>
      <div
        className={'modal__background'}
        onClick={() => props.toggleModal()}
      ></div>
      <div className={'modal__container'}>
        <div className="modal__close-btn" onClick={() => props.toggleModal()}>
          {'\u2715'}
        </div>

        {props.children}
      </div>
    </div>
  );
};

export default Modal;
