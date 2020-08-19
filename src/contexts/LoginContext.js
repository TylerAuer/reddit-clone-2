import React, { useState, useEffect } from 'react';

// Creates context object
export const LoginContext = React.createContext();

// Creates a provider for components to consume and subscribe to changes
export const LoginContextProvider = (props) => {
  const [loginState, setLoginState] = useState(null);

  useEffect(() => {
    fetch('/API/account/session')
      .then((res) => res.json())
      .then((user) => setLoginState(user));
  }, []);

  return (
    <LoginContext.Provider value={[loginState, setLoginState]}>
      {props.children}
    </LoginContext.Provider>
  );
};
