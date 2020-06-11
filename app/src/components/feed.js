/** @jsx jsx */
//import React from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../constants';

const postDivStyle = css`
  margin: 1rem auto;
  border: 1px solid ${COLORS.blue};
  border-radius: 10px;
  padding: 5rem 2rem;
`;

const Feed = (props) => {
  return (
    <div>
      <h2>This is the feed...</h2>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
      <div css={postDivStyle}>A post goes right here.</div>
    </div>
  );
};

export default Feed;
