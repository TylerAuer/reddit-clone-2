/** @jsx jsx */
import React from 'react';
import { FEATURES } from '../constants';
import GenericButton from './GenericBtn';
import { css, jsx } from '@emotion/core';
import { FeedConditionsContext } from '../contexts/FeedConditionsContext';

const navStyle = css`
  margin: 2rem;
`;

const Nav = (props) => {
  const [, setFeedConditions] = React.useContext(FeedConditionsContext);

  return (
    <div css={navStyle}>
      <GenericButton onClick={() => props.onClick(FEATURES.POST_CREATE)}>
        Create Post
      </GenericButton>
      <GenericButton
        onClick={() => {
          props.onClick(FEATURES.FEED);
          setFeedConditions({});
        }}
      >
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
};

export default Nav;
