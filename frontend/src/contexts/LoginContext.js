import React, { useState } from 'react';

// Creates context object
export const LoginContext = React.createContext();

// Creates a provider for components to consume and subscribe to changes
export const LoginContextProvider = (props) => {
  // const [loginState, setLoginState] = useState(null);

  //TEST: Keeps me logged in for testing
  const [loginState, setLoginState] = useState({
    id: 9,
    username: 'Prestoneous',
    first_name: 'Tyler',
    last_name: 'Auer',
    date_joined: 1590687513,
    email_address: 'fakeTyler@gmail.com',
  });

  return (
    <LoginContext.Provider value={[loginState, setLoginState]}>
      {props.children}
    </LoginContext.Provider>
  );
};
