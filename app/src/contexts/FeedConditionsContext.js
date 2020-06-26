import React, { useState } from 'react';

// Creates context object
export const FeedConditionsContext = React.createContext();

// Creates a provider for components to consume and subscribe to changes
export const FeedConditionsContextProvider = (props) => {
  const [feedConditions, setFeedConditions] = useState({});

  return (
    <FeedConditionsContext.Provider value={[feedConditions, setFeedConditions]}>
      {props.children}
    </FeedConditionsContext.Provider>
  );
};
