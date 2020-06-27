/** @jsx jsx */
import React from 'react';
import { FEATURES } from '../constants';
import BtnBlue from './BtnBlue';
import { css, jsx } from '@emotion/core';
import { FeedContext } from '../contexts/FeedContext';
import { FeatureContext } from '../contexts/FeatureContext';

const navStyle = css`
  margin: 2rem 2rem 4rem 0;
`;

const Nav = (props) => {
  const [, setFeed] = React.useContext(FeedContext);
  const [, setFeature] = React.useContext(FeatureContext);

  return (
    <div css={navStyle}>
      <BtnBlue onClick={() => setFeature(FEATURES.POST_CREATE)}>
        Create Post
      </BtnBlue>

      <BtnBlue
        onClick={() => {
          setFeed({});
          setFeature(FEATURES.FEED);
        }}
      >
        Show Feed
      </BtnBlue>

      <BtnBlue onClick={() => setFeature(FEATURES.USER_READ)}>
        Find User
      </BtnBlue>
    </div>
  );
};

export default Nav;
