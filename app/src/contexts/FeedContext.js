import React, { useState } from 'react';

// Creates context object
export const FeedContext = React.createContext();

// Creates a provider for components to consume and subscribe to changes
export const FeedContextProvider = (props) => {
  const [feed, setFeed] = useState({});

  return (
    <FeedContext.Provider value={[feed, setFeed]}>
      {props.children}
    </FeedContext.Provider>
  );
};
