import React, { useState } from 'react';
import { FEATURES } from '../constants';

// Creates context object
export const UserProfileContext = React.createContext();

// Creates a provider for components to consume and subscribe to changes
export const UserProfileContextProvider = (props) => {
  const [userProfile, setUserProfile] = useState();

  return (
    <UserProfileContext.Provider value={[userProfile, setUserProfile]}>
      {props.children}
    </UserProfileContext.Provider>
  );
};
