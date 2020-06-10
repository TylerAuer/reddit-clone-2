import React from 'react';
import { FEATURES } from '../constants';
import GenericButton from '../components/generic-btn';

const Nav = (props) => {
  return (
    <>
      <GenericButton
        text={'Feed'}
        featName={FEATURES.FEED}
        onClick={props.onClick}
      />
      <GenericButton
        text={'Lookup a user'}
        featName={FEATURES.USER_READ}
        onClick={props.onClick}
      />
      <GenericButton
        text={'Create a user'}
        featName={FEATURES.USER_CREATE}
        onClick={props.onClick}
      />
    </>
  );
};

export default Nav;
