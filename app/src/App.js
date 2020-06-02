import React, { useState } from 'react';
import UserLookupForm from './components/user-lookup-form';
import GenericButton from './components/generic-btn';

function App() {
  //TODO: Use react router to implement the navigation
  const [activeElem, setActiveElem] = useState(null);
  return (
    <div>
      <h1>Reddit 2</h1>
      <p>
        Welcome to Reddit 2. It's reddit but without all that annoying stuff you
        like!
      </p>
      <GenericButton
        text={'Find User'}
        // QUESTION: How do I extract this to a nav elem.
        onClick={() => setActiveElem(<UserLookupForm />)}
      />
      <div id={'app-element'}>{activeElem}</div>
    </div>
  );
}

export default App;
