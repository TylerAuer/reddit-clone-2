import React, { useState } from 'react';
import UserLookupForm from './components/user-lookup-form';
import Nav from './components/nav';

function App() {
  //TODO: Use react router to implement the navigation

  // TODO: Define constants so that they are referencable
  // Use uppercase and snakecase (FEED_FEATURE)
  // Often kept in a separate file as an object. The key is the reference but
  // the value can be anything, since it doesn't need to be known by anyone
  const [activeFeature, setActiveFeature] = useState('feed');

  /**
   * Sets the active feature for the app. Passed to buttons, usually in <Nav>
   * @param {string} feature - Name of feature being clicked on
   */
  const navOnClick = (feature) => {
    activeFeature === feature
      ? setActiveFeature('feed')
      : setActiveFeature(feature);
  };

  return (
    <div>
      <h1>Reddit 2</h1>
      <p>
        Welcome to Reddit 2. It's reddit but without all that annoying stuff you
        like!
      </p>

      <Nav onClick={navOnClick} />

      {activeFeature === 'userLookup' && <UserLookupForm />}
    </div>
  );
}

export default App;
