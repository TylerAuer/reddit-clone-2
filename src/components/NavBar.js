import React from 'react';
import { Grid, Header, Button, Dropdown } from 'semantic-ui-react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import { Link, useHistory } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import ModalLogin from './ModalLogin';

const NavBar = (props) => {
  const [loginState, setLoginState] = React.useContext(LoginContext);
  const history = useHistory();

  const accountBtns = () => {
    // If logged in
    if (loginState) {
      return (
        <div id="navbar__dropdown">
          <Dropdown button text={loginState.username}>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/profile/update">Change Account Info</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link
                  to={{
                    pathname: '/feed',
                    search: `?userID=${loginState.id}`,
                  }}
                >
                  See Your Posts
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  fetch('/API/account/signout');
                  setLoginState(null);
                  toaster.notify('You have been signed out of your account.');
                }}
              >
                <Link to="/">Sign Out</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    } else {
      // If logged out
      return (
        <div id="navbar__sign-in-up">
          <Button.Group floated="right">
            <ModalLogin />
            <Button.Or />
            <Button
              onClick={() => history.push('/account/signup')}
              color="purple"
            >
              Sign Up
            </Button>
          </Button.Group>
        </div>
      );
    }
  };

  return (
    <Grid>
      <Grid.Column floated="left" width={8}>
        <Link to="/">
          <Header as="h1">Reddit Clone</Header>
        </Link>
      </Grid.Column>
      <Grid.Column textAlign="right" floated="right" width={8}>
        {accountBtns()}
      </Grid.Column>
    </Grid>
  );
};

export default NavBar;
