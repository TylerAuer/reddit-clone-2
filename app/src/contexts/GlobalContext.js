import React, { useState } from 'react';
import { LoginContextProvider } from './LoginContext';
import { FeedConditionsContextProvider } from './FeedConditionsContext';

// Creates context object
export const GlobalContext = React.createContext();

// Creates a provider for components to consume and subscribe to changes
export const GlobalContextProvider = (props) => {
  return (
    <GlobalContext.Provider>
      <LoginContextProvider>
        <FeedConditionsContextProvider>
          {props.children}
        </FeedConditionsContextProvider>
      </LoginContextProvider>
    </GlobalContext.Provider>
  );
};
