/** @jsx jsx */
import React from 'react';
import { FEATURES } from '../constants';
import GenericButton from './GenericBtn';
import { css, jsx } from '@emotion/core';
import { FeedConditionsContext } from '../contexts/FeedConditionsContext';
import { ActiveFeatureContext } from '../contexts/ActiveFeatureContext';

const navStyle = css`
  margin: 2rem 2rem 4rem 0;
`;

const Nav = (props) => {
  const [, setFeedConditions] = React.useContext(FeedConditionsContext);
  const [, setActiveFeature] = React.useContext(ActiveFeatureContext);

  return (
    <div css={navStyle}>
      <GenericButton onClick={() => setActiveFeature(FEATURES.POST_CREATE)}>
        Create Post
      </GenericButton>

      <GenericButton
        onClick={() => {
          setFeedConditions({});
          setActiveFeature(FEATURES.FEED);
        }}
      >
        Show Feed
      </GenericButton>

      <GenericButton onClick={() => setActiveFeature(FEATURES.USER_READ)}>
        Find User
      </GenericButton>
    </div>
  );
};

export default Nav;
