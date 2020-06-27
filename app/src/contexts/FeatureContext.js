import React, { useState } from 'react';
import { FEATURES } from '../constants';

// Creates context object
export const FeatureContext = React.createContext();

// Creates a provider for components to consume and subscribe to changes
export const FeatureContextProvider = (props) => {
  const [feature, setFeature] = useState(FEATURES.FEED);

  return (
    <FeatureContext.Provider value={[feature, setFeature]}>
      {props.children}
    </FeatureContext.Provider>
  );
};
