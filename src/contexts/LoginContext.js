import React, { useState } from 'react';

// Creates context object
export const LoginContext = React.createContext();

// Creates a provider for components to consume and subscribe to changes
export const LoginContextProvider = (props) => {
  const [loginState, setLoginState] = useState(null);

  return (
    <LoginContext.Provider value={[loginState, setLoginState]}>
      {props.children}
    </LoginContext.Provider>
  );
};
