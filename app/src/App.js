import React, { useState } from 'react';
import { FEATURES } from './constants';
import UserRead from './components/UserRead';
import UserCreate from './components/UserCreate';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Feed from './components/Feed';
import { GlobalContextProvider } from './contexts/GlobalContext';
import PostForm from './components/PostForm';

function App() {
  const [activeFeature, setActiveFeature] = useState(FEATURES.FEED);

  // onClick to load site features
  const mountUnmountFeature = (feature) => {
    activeFeature === feature ? setActiveFeature() : setActiveFeature(feature);
  };

  return (
    <GlobalContextProvider>
      <NavBar />
      <section className="section-main">
        <h1>2 Reddit 2 Furious</h1>

        <Nav onClick={mountUnmountFeature} />

        {activeFeature === FEATURES.FEED && <Feed />}
        {activeFeature === FEATURES.USER_CREATE && <UserCreate />}
        {activeFeature === FEATURES.USER_READ && <UserRead />}
        {activeFeature === FEATURES.POST_CREATE && <PostForm />}
      </section>
    </GlobalContextProvider>
  );
}

export default App;
