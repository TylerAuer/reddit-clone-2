import React from 'react';
import { LoginContextProvider } from './LoginContext';

export const GlobalContext = React.createContext();

// Creates a general provider for providing all contexts
// Use in Index.js so it reaches app.js
export const GlobalContextProvider = (props) => {
  return (
    <GlobalContext.Provider>
      <LoginContextProvider>{props.children}</LoginContextProvider>
    </GlobalContext.Provider>
  );
};
