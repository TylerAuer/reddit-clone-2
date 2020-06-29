/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../constants';
import { LoginContext } from '../contexts/LoginContext';
import BtnBlue from './BtnBlue';
import createComment from '../functions/createComment';

const postStyles = css`
  padding-top: 3rem;
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
    font-size: 2.25rem;
  }

  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    font-weight: 500;
    padding: 1rem;
    background: white;
    color: #555555;
    border: 2px solid ${COLORS['green-light']};
    border-radius: 1rem;
    margin-bottom: 2rem;
    outline: none;
    font-family: 'Lato';
  }

  textarea {
    width: 100%;
    height: 400px;
    padding: 1rem;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${COLORS['green-xdark']};
    opacity: 0.25;
    font-weight: normal;
    text-shadow: none;
  }

  input:focus,
  textarea:focus {
    border-color: ${COLORS.orange};
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const FormCommentCreate = (props) => {
  const [loginState] = React.useContext(LoginContext);
  const [formData, setFormData] = React.useState({
    comment_body: '',
  });

  const handleFormChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const submit = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    createComment(loginState.id, props.parent, formData.comment_body);
  };

  return (
    <div css={postStyles}>
      <form onSubmit={submit} id="formId">
        <label htmlFor="comment_body">
          <b>Leave a comment: </b>

          <textarea
            id="comment_body"
            name="comment_body"
            value={formData.comment_body}
            multiline="true"
            onChange={handleFormChange}
          />
        </label>
        <br />
        <BtnBlue onClick={() => null} type="submit">
          Submit this comment!
        </BtnBlue>
      </form>
    </div>
  );
};

export default FormCommentCreate;
