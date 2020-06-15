import React from 'react';
import getUserInfo from '../functions/getUserInfo';
import { LoginContext } from '../contexts/LoginContext';

const UserUpdate = (props) => {
  const [userInfo, setUserInfo] = React.useState(false);
  const [loginState, setLoginState] = React.useContext(LoginContext);

  // If hasn't yet looked for user info, makes fetch request
  // Sets state to object with user info or null if none found
  if (!userInfo) {
    getUserInfo(loginState, setUserInfo);
  }

  return (
    <div>
      <h2>Ready for a makeover?</h2>
      <p>Update anything you'd like.</p>
      {/* <form onSubmit={submit} id="formId"> */}
      <form onSubmit={() => 1 + 1} id="formId">
        <label htmlFor="username">
          <b>Username: </b>
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={userInfo ? userInfo.username : undefined}
        />{' '}
        <br />
        <label htmlFor="first">
          <b>First Name: </b>
        </label>
        <input
          type="text"
          id="first"
          name="first"
          value={userInfo ? userInfo.first_name : undefined}
        />{' '}
        <br />
        <label htmlFor="last">
          <b>Last Name: </b>
        </label>
        <input
          type="text"
          id="last"
          name="last"
          value={userInfo ? userInfo.last_name : undefined}
        />{' '}
        <br />
        <label htmlFor="email">
          <b>Email: </b>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={userInfo ? userInfo.email_address : undefined}
        />{' '}
        <br />
        <button type="submit">Join Reddit 2</button>
      </form>
      {/* {responseMsg && Response} */}
    </div>
  );
};

export default UserUpdate;
