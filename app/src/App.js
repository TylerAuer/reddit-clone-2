import React, { useState } from 'react';
import UserRead from './components/user-read';
import UserCreate from './components/user-create';
import { FEATURES } from './constants';
import Nav from './components/nav';
import Feed from './components/feed';

function App() {
  //TODO: Use react router to implement the navigation
  const [activeFeature, setActiveFeature] = useState(FEATURES.USER_CREATE);

  const navOnClick = (feature) => {
    activeFeature === feature
      ? setActiveFeature(FEATURES.FEED)
      : setActiveFeature(feature);
  };

  return (
    <div>
      <h1>2 Reddit 2 Furious</h1>

      <Nav onClick={navOnClick} />

      {activeFeature === FEATURES.FEED && <Feed />}
      {activeFeature === FEATURES.USER_CREATE && <UserCreate />}
      {activeFeature === FEATURES.USER_READ && <UserRead />}
    </div>
  );
}

export default App;
