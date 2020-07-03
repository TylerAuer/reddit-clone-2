import React from 'react';
import { LoginContextProvider } from './LoginContext';
import { FeedContextProvider } from './FeedContext';
import { FeatureContextProvider } from './FeatureContext';
import { UserProfileContextProvider } from './UserProfileContext';

export const GlobalContext = React.createContext();

// Creates a general provider for providing all contexts
// Use in Index.js so it reaches app.js
export const GlobalContextProvider = (props) => {
  return (
    <GlobalContext.Provider>
      <LoginContextProvider>
        <FeatureContextProvider>
          <UserProfileContextProvider>
            <FeedContextProvider>{props.children}</FeedContextProvider>
          </UserProfileContextProvider>
        </FeatureContextProvider>
      </LoginContextProvider>
    </GlobalContext.Provider>
  );
};
