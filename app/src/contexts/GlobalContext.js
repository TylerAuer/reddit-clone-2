import React, { useState } from 'react';
import { LoginContextProvider } from './LoginContext';

// Creates context object
export const GlobalContext = React.createContext();

// Creates a provider for components to consume and subscribe to changes
export const GlobalContextProvider = (props) => {
  return (
    <GlobalContext.Provider>
      <LoginContextProvider>{props.children}</LoginContextProvider>
    </GlobalContext.Provider>
  );
};
