import React, { useState } from 'react';

// Creates context object
export const LoginContext = React.createContext();

// Creates a provider for components to consume and subscribe to changes
export const LoginContextProvider = (props) => {
  // const [loginState, setLoginState] = useState(false);

  // TEST: Keeps me logged in for testing
  const [loginState, setLoginState] = useState({
    username: 'Joshy',
    first_name: 'Josh',
    last_name: 'Cantor',
    date_joined: 1590687513,
    email_address: 'fakeJosh@gmail.comd',
  });

  return (
    <LoginContext.Provider value={[loginState, setLoginState]}>
      {props.children}
    </LoginContext.Provider>
  );
};
