import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import { LoginContext } from '../contexts/LoginContext';
import ProfileMenu from './ProfileMenu';
import ModalLogin from './ModalLogin';
import ModalSignUp from './ModalSignUp';

const NavBar = (props) => {
  const [loginState] = React.useContext(LoginContext);

  const accountBtns = () => {
    // If logged in
    if (loginState) {
      return <ProfileMenu />;
    } else {
      // If logged out
      return (
        <Button.Group floated="right">
          <ModalLogin />
          <Button.Or />
          <ModalSignUp />
        </Button.Group>
      );
    }
  };

  return (
    <Grid>
      <Grid.Column floated="left" width={6}>
        <Header as="h1">Reddit Clone</Header>
      </Grid.Column>
      <Grid.Column floated="right" width={10}>
        {accountBtns()}
      </Grid.Column>
    </Grid>
  );
};

export default NavBar;
