import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
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
        <Menu.Item
          onClick={() => toggleAccountMenu}
          position="right"
          name={loginState.username}
        />
      );
    } else {
      // If logged out
      return (
        <>
          <Menu.Item
            onClick={() => toggleSignUpModal}
            position="right"
            name="Sign Up"
          />
          <Menu.Item onClick={() => toggleLoginModal} name="Log In" />
        </>
      );
    }
  };

  return (
    <Menu pointing secondary>
      <Menu.Item>
        <Header as="h1">Reddit Clone</Header>
      </Menu.Item>
      {accountBtns()}
      {showLoginModal && <ModalLogin toggleModal={toggleLoginModal} />}
      {showSignUpModal && <ModalSignUp toggleModal={toggleSignUpModal} />}
      <ProfileMenu show={showAccountMenu} displayToggle={setShowAccountMenu} />
    </Menu>
  );
};

export default NavBar;
