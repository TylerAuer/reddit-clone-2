import React from 'react';
import { Button } from 'semantic-ui-react';

const BtnBlue = (props) => {
  return (
    <Button primary onClick={() => props.onClick()}>
      {props.children}
    </Button>
  );
};

export default BtnBlue;
