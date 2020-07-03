import React from 'react';
import { FeatureContext } from '../contexts/FeatureContext';
import { UserProfileContext } from '../contexts/UserProfileContext';
import { FEATURES } from '../constants';

const ProfileReference = (props) => {
  const [, setUserProfile] = React.useContext(UserProfileContext);
  const [, setFeature] = React.useContext(FeatureContext);

  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() => {
        setUserProfile(props.username);
        setFeature(FEATURES.USER_READ);
      }}
    >
      {props.children}
    </div>
  );
};

export default ProfileReference;
