import React from 'react';
import { Grid, Header, Button, Dropdown } from 'semantic-ui-react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import { FEATURES } from '../constants';
import { LoginContext } from '../contexts/LoginContext';
import { FeedContext } from '../contexts/FeedContext';
import { FeatureContext } from '../contexts/FeatureContext';
import ModalLogin from './ModalLogin';
import ModalSignUp from './ModalSignUp';

const NavBar = (props) => {
  const [loginState, setLoginState] = React.useContext(LoginContext);
  const [, setActiveFeature] = React.useContext(FeatureContext);
  const [, setFeed] = React.useContext(FeedContext);

  const accountBtns = () => {
    // If logged in
    if (loginState) {
      return (
        <Dropdown button text={loginState.username}>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                setActiveFeature(FEATURES.USER_UPDATE);
              }}
            >
              Change Account Info
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setFeed({ authorID: loginState.id });
                setActiveFeature(FEATURES.FEED);
              }}
            >
              See Your Posts
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setLoginState(false);
                toaster.notify('You have been signed out of your account.');
              }}
            >
              Sign Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
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
      <Grid.Column textAlign="right" floated="right" width={10}>
        {accountBtns()}
      </Grid.Column>
    </Grid>
  );
};

export default NavBar;
