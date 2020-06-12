import React, { useState } from 'react';
import { FEATURES } from './constants';
import UserRead from './components/UserRead';
import UserCreate from './components/UserCreate';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Feed from './components/Feed';
import { LoginContextProvider } from './contexts/LoginContext';

function App() {
  const [activeFeature, setActiveFeature] = useState(FEATURES.USER_CREATE);

  // onClick to load site features
  const navOnClick = (feature) => {
    activeFeature === feature
      ? setActiveFeature(FEATURES.FEED)
      : setActiveFeature(feature);
  };

  //TODO: Use react router to implement the navigation
  return (
    <LoginContextProvider>
      <NavBar />
      <section className="section-main">
        <h1>2 Reddit 2 Furious</h1>

        <Nav onClick={navOnClick} />

        {activeFeature === FEATURES.FEED && <Feed />}
        {activeFeature === FEATURES.USER_CREATE && <UserCreate />}
        {activeFeature === FEATURES.USER_READ && <UserRead />}
      </section>
    </LoginContextProvider>
  );
}

export default App;
