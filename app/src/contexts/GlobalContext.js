import React from 'react';
import { LoginContextProvider } from './LoginContext';
import { FeedConditionsContextProvider } from './FeedConditionsContext';
import { ActiveFeatureContextProvider } from './ActiveFeatureContext';

// Creates context object
export const GlobalContext = React.createContext();

// Creates a provider for components to consume and subscribe to changes
export const GlobalContextProvider = (props) => {
  return (
    <GlobalContext.Provider>
      <LoginContextProvider>
        <ActiveFeatureContextProvider>
          <FeedConditionsContextProvider>
            {props.children}
          </FeedConditionsContextProvider>
        </ActiveFeatureContextProvider>
      </LoginContextProvider>
    </GlobalContext.Provider>
  );
};
