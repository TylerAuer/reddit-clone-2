import React from 'react';
import GenericButton from '../components/generic-btn';

const Nav = (props) => {
  return (
    <>
      <GenericButton
        text={'Lookup a user'}
        featName={'userLookup'}
        onClick={props.onClick}
      />
      <GenericButton
        text={'Create a user'}
        featName={'userCreate'}
        onClick={props.onClick}
      />
    </>
  );
};

export default Nav;
