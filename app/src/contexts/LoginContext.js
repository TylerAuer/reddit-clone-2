import React, { useState } from 'react';

// Creates context object
export const LoginContext = React.createContext();

// Creates a provider for components to consume and subscribe to changes
export const LoginContextProvider = (props) => {
  // const [loginState, setLoginState] = useState(false);

  // TEST: Keeps me logged in for testing
  const [loginState, setLoginState] = useState({
    username: 'Bob',
    first_name: 'jfdsal',
    last_name: 'fadsjl',
    date_joined: 1592151583,
    email_address: 'adsgfj@jgfdsl',
  });

  return (
    <LoginContext.Provider value={[loginState, setLoginState]}>
      {props.children}
    </LoginContext.Provider>
  );
};
