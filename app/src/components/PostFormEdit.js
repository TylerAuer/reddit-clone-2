/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS, FEATURES } from '../constants';
import { LoginContext } from '../contexts/LoginContext';
import { ActiveFeatureContext } from '../contexts/ActiveFeatureContext';
import BtnBlue from './BtnBlue';
import deletePost from '../functions/deletePost';

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

const PostFormEdit = ({ post }) => {
  const [loginState] = React.useContext(LoginContext);
  const [, setActiveFeature] = React.useContext(ActiveFeatureContext);
  const [formData, setFormData] = React.useState({
    post_title: post.title,
    post_body: post.body,
  });

  const handleFormChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const submit = (event) => {
    event.preventDefault();

    fetch(`/API/post/?postID=${post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author: loginState.username,
        post_title: formData.post_title,
        post_body: formData.post_body,
      }),
    })
      .then((response) => response.text())
      .then((data) => alert(data));
  };

  return (
    <div css={postStyles}>
      <h2>Edit Your Post</h2>

      <form onSubmit={submit} id="formId">
        <label htmlFor="post_title">
          <b>Title: </b>
        </label>
        <input
          type="text"
          id="post_title"
          name="post_title"
          placeholder="Give your post a title"
          onChange={handleFormChange}
          value={formData.post_title}
        />{' '}
        <br />
        <label htmlFor="post_body">
          <b>Body: </b>

          <textarea
            id="post_body"
            name="post_body"
            value={formData.post_body}
            multiline="true"
            onChange={handleFormChange}
          />
        </label>
        <br />
        <BtnBlue onClick={() => console.log('Hi')} type="submit">
          Update your post
        </BtnBlue>
      </form>
      <BtnBlue
        onClick={() => {
          deletePost(post.id);
          setActiveFeature(FEATURES.FEED);
        }}
      >
        Delete your post
      </BtnBlue>
    </div>
  );
};

export default PostFormEdit;
