import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavLink = ({ doShow, to = null, active = true, text }) => {
  if (!doShow) {
    return null;
  }

  if (!to) {
    return (
      <Menu.Item color="purple" active={active}>
        {text}
      </Menu.Item>
    );
  }

  return (
    <Link to={to}>
      <Menu.Item color="purple" active={active}>
        {text}
      </Menu.Item>
    </Link>
  );
};

export default NavLink;
