import React from 'react';
import { Button } from 'semantic-ui-react';

const BtnWhite = (props) => {
  return <Button onClick={() => props.onClick()}>{props.children}</Button>;
};

export default BtnWhite;
