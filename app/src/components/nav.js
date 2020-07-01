import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { FEATURES } from '../constants';
import BtnBlue from './BtnBlue';
import { FeedContext } from '../contexts/FeedContext';
import { FeatureContext } from '../contexts/FeatureContext';

const Nav = (props) => {
  const [, setFeed] = React.useContext(FeedContext);
  const [feature, setFeature] = React.useContext(FeatureContext);

  return (
    <Menu id="menu" pointing secondary>
      <Menu.Item
        name="Feed"
        color="purple"
        active={feature === FEATURES.FEED}
        onClick={() => {
          setFeed({});
          setFeature(FEATURES.FEED);
        }}
      />

      <Menu.Item
        name="New Post"
        color="purple"
        active={feature === FEATURES.POST_CREATE}
        onClick={() => setFeature(FEATURES.POST_CREATE)}
      />

      <Menu.Item
        name="Find User"
        color="purple"
        active={feature === FEATURES.USER_READ}
        onClick={() => setFeature(FEATURES.USER_READ)}
      />
    </Menu>
  );
};

export default Nav;
