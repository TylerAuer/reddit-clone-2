/** @jsx jsx */
import React from 'react';
import { FEATURES } from '../constants';
import GenericButton from './GenericBtn';
import { css, jsx } from '@emotion/core';

const navStyle = css`
  margin: 2rem;
`;

function Nav(props) {
  return (
    <div css={navStyle}>
      <GenericButton onClick={() => props.onClick(FEATURES.POST_CREATE)}>
        Create Post
      </GenericButton>
      <GenericButton onClick={() => props.onClick(FEATURES.FEED)}>
        Show Feed
      </GenericButton>
      <GenericButton onClick={() => props.onClick(FEATURES.USER_READ)}>
        Find User
      </GenericButton>
      <GenericButton onClick={() => props.onClick(FEATURES.USER_CREATE)}>
        Create User
      </GenericButton>
    </div>
  );
}

export default Nav;
