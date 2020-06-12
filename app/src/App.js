import React, { useState } from 'react';
import { FEATURES } from './constants';
import UserRead from './components/user-read';
import UserCreate from './components/user-create';
import Nav from './components/nav';
import Feed from './components/feed';
import { LoginContextProvider } from './contexts/LoginContext';

function App() {
  const [activeFeature, setActiveFeature] = useState(FEATURES.USER_CREATE);
  const [isLoggedIn, setIsLoggedIn] = useState('Prestoneous');

  const UserLoginContext = React.createContext();

  // onClick to load site features
  const navOnClick = (feature) => {
    activeFeature === feature
      ? setActiveFeature(FEATURES.FEED)
      : setActiveFeature(feature);
  };

  //TODO: Use react router to implement the navigation
  return (
    <LoginContextProvider>
      <h1>2 Reddit 2 Furious</h1>

      <Nav onClick={navOnClick} />

      {activeFeature === FEATURES.FEED && <Feed />}
      {activeFeature === FEATURES.USER_CREATE && <UserCreate />}
      {activeFeature === FEATURES.USER_READ && <UserRead />}
    </LoginContextProvider>
  );
}

export default App;
