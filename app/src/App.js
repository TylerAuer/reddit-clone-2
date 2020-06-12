import React, { useState } from 'react';
import { FEATURES } from './constants';
import UserRead from './components/UserRead';
import UserCreate from './components/UserCreate';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Feed from './components/Feed';
import { GlobalContextProvider } from './contexts/GlobalContext';
import LoginModal from './components/Modal';

function App() {
  const [activeFeature, setActiveFeature] = useState();

  // onClick to load site features
  const mountUnmountFeature = (feature) => {
    activeFeature === feature ? setActiveFeature() : setActiveFeature(feature);
  };

  //TODO: Use react router to implement the navigation
  return (
    <GlobalContextProvider>
      <NavBar login={mountUnmountFeature} />
      <section className="section-main">
        <h1>2 Reddit 2 Furious</h1>

        <Nav onClick={mountUnmountFeature} />

        {activeFeature === FEATURES.FEED && <Feed />}
        {activeFeature === FEATURES.USER_CREATE && <UserCreate />}
        {activeFeature === FEATURES.USER_READ && <UserRead />}
      </section>
    </GlobalContextProvider>
  );
}

export default App;
