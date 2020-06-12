import React from 'react';
import { FEATURES } from '../constants';
import GenericButton from './GenericBtn';
import { LoginContext } from '../contexts/LoginContext';

function Nav(props) {
  const [loginState, setLoginState] = React.useContext(LoginContext);

  const loginStatusDisplay = <div>Logged in as {loginState}</div>;

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
      <GenericButton
        text={'Toggle Login'}
        onClick={() => {
          loginState ? setLoginState(false) : setLoginState('Prestoneous');
        }}
      />
      <GenericButton
        text={'Toggle Login'}
        onClick={() => {
          loginState ? setLoginState(false) : setLoginState('Prestoneous');
        }}
      />
      {loginState && loginStatusDisplay}
    </>
  );
}

export default Nav;
