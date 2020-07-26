import React from 'react';
import { Menu, Popup } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import NavLink from './NavLink';

const Nav = (props) => {
  const { pathname } = useLocation();
  const [loginState] = React.useContext(LoginContext);

  return (
    <Menu style={{ marginBottom: '25px' }} id="menu" pointing secondary>
      <NavLink doShow={true} to="/" active={pathname === '/feed'} text="Feed" />
      <NavLink
        doShow={loginState}
        to="/post/create"
        active={pathname === '/post/create'}
        text="New Post"
      />

      {!loginState && (
        <Popup
          content="You must create an account or sign in to create a post."
          position="right center"
          trigger={<Menu.Item disabled>New Post</Menu.Item>}
        />
      )}
      <NavLink
        doShow={pathname.includes('/profile/read')}
        isLink={false}
        text="User Profile"
      />
      <NavLink
        doShow={pathname.includes('/post/read')}
        isLink={false}
        text="Post"
      />
      <NavLink
        doShow={pathname.includes('/account/signup')}
        isLink={false}
        text="Sign Up"
      />
      <div style={{ marginLeft: 'auto' }}>
        <NavLink
          doShow={loginState}
          to="/profile/update"
          active={pathname.includes('/profile/update')}
          text="Account"
        />
      </div>
    </Menu>
  );
};

export default Nav;
