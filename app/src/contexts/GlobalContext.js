import React from 'react';
import { LoginContextProvider } from './LoginContext';
import { FeedConditionsContextProvider } from './FeedConditionsContext';
import { FeatureContextProvider } from './FeatureContext';

export const GlobalContext = React.createContext();

// Creates a general provider for providing all contexts
// Use in Index.js so it reaches app.js
export const GlobalContextProvider = (props) => {
  return (
    <GlobalContext.Provider>
      <LoginContextProvider>
        <FeatureContextProvider>
          <FeedConditionsContextProvider>
            {props.children}
          </FeedConditionsContextProvider>
        </FeatureContextProvider>
      </LoginContextProvider>
    </GlobalContext.Provider>
  );
};
