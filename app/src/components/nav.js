import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { FEATURES } from '../constants';
import { FeedContext } from '../contexts/FeedContext';
import { FeatureContext } from '../contexts/FeatureContext';
import { LoginContext } from '../contexts/LoginContext';

const Nav = (props) => {
  const [, setFeed] = React.useContext(FeedContext);
  const [feature, setFeature] = React.useContext(FeatureContext);
  const [loginState] = React.useContext(LoginContext);

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
      {loginState && (
        <Menu.Item
          name="New Post"
          color="purple"
          active={feature === FEATURES.POST_CREATE}
          onClick={() => setFeature(FEATURES.POST_CREATE)}
        />
      )}

      <Menu.Item
        name="Find User"
        color="purple"
        active={feature === FEATURES.USER_READ}
        onClick={() => setFeature(FEATURES.USER_READ)}
      />
      {loginState && (
        <Menu.Item
          position="right"
          name="Account Info"
          color="purple"
          active={feature === FEATURES.USER_UPDATE}
          onClick={() => setFeature(FEATURES.USER_UPDATE)}
        />
      )}
    </Menu>
  );
};

export default Nav;
