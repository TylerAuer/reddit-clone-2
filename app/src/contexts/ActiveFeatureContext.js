import React, { useState } from 'react';
import { FEATURES } from '../constants';

// Creates context object
export const ActiveFeatureContext = React.createContext();

// Creates a provider for components to consume and subscribe to changes
export const ActiveFeatureContextProvider = (props) => {
  const [activeFeature, setActiveFeature] = useState(FEATURES.FEED);

  return (
    <ActiveFeatureContext.Provider value={[activeFeature, setActiveFeature]}>
      {props.children}
    </ActiveFeatureContext.Provider>
  );
};
