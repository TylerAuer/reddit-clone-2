import React from 'react';
import { Container, Grid, Header, Button } from 'semantic-ui-react';
import { LoginContext } from '../contexts/LoginContext';
import ProfileMenu from './ProfileMenu';
import ModalLogin from './ModalLogin';
import ModalSignUp from './ModalSignUp';

const NavBar = (props) => {
  const [showAccountMenu, setShowAccountMenu] = React.useState(false);
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showSignUpModal, setShowSignUpModal] = React.useState(false);
  const [loginState] = React.useContext(LoginContext);

  const toggleAccountMenu = () => {
    showAccountMenu ? setShowAccountMenu(false) : setShowAccountMenu(true);
  };

  const toggleLoginModal = () => {
    showLoginModal ? setShowLoginModal(false) : setShowLoginModal(true);
  };

  const toggleSignUpModal = () => {
    showSignUpModal ? setShowSignUpModal(false) : setShowSignUpModal(true);
  };

  const accountBtns = () => {
    // If logged in
    if (loginState) {
      return (
        <Button animated floated="right" onClick={() => toggleAccountMenu}>
          <Button.Content visible>{loginState.username}</Button.Content>
          <Button.Content hidden>Account</Button.Content>
        </Button>
      );
    } else {
      // If logged out
      return (
        <Button.Group floated="right">
          <Button color="violet" onClick={() => toggleSignUpModal}>
            Log In
          </Button>
          <Button.Or />
          <Button color="purple" onClick={() => toggleLoginModal}>
            Sign Up
          </Button>
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
      {showLoginModal && <ModalLogin toggleModal={toggleLoginModal} />}
      {showSignUpModal && <ModalSignUp toggleModal={toggleSignUpModal} />}
      <ProfileMenu show={showAccountMenu} displayToggle={setShowAccountMenu} />
    </Grid>
  );
};

export default NavBar;
