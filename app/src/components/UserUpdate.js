import React from 'react';
import getUserInfo from '../functions/getUserInfo';
import { LoginContext } from '../contexts/LoginContext';

const UserUpdate = (props) => {
  const [userInfo, setUserInfo] = React.useState(false);
  const [formData, setFormData] = React.useState(false);
  const [loginState, setLoginState] = React.useContext(LoginContext);

  // If hasn't yet looked for user info, makes fetch request
  // Sets state to object with user info or null if none found
  if (!formData) {
    getUserInfo(loginState, setFormData);
  }

  const handleFormChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const submit = (event) => {
    event.preventDefault();
    const elems = event.target.elements;
    const currentUsername = '?orig_username=' + loginState;
    const username = '&username=' + elems['username'].value;
    const first = '&first=' + elems['first'].value;
    const last = '&last=' + elems['last'].value;
    const email = '&email=' + elems['email'].value;
    const queryString = currentUsername + username + first + last + email;

    fetch('/API/user/' + queryString, {
      method: 'PATCH',
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2>Ready for a makeover?</h2>
      <p>Update anything you'd like.</p>
      <form onSubmit={submit} id="formId">
        <label htmlFor="username">
          <b>Username: </b>
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData ? formData.username : undefined}
          onChange={handleFormChange}
        />{' '}
        <br />
        <label htmlFor="first">
          <b>First Name: </b>
        </label>
        <input
          type="text"
          id="first"
          name="first_name"
          value={formData ? formData.first_name : undefined}
          onChange={handleFormChange}
        />{' '}
        <br />
        <label htmlFor="last">
          <b>Last Name: </b>
        </label>
        <input
          type="text"
          id="last"
          name="last_name"
          value={formData ? formData.last_name : undefined}
          onChange={handleFormChange}
        />{' '}
        <br />
        <label htmlFor="email">
          <b>Email: </b>
        </label>
        <input
          type="email"
          id="email"
          name="email_address"
          value={formData ? formData.email_address : undefined}
          onChange={handleFormChange}
        />{' '}
        <br />
        <button type="submit">Join Reddit 2</button>
      </form>
      {/* {responseMsg && Response} */}
    </div>
  );
};

export default UserUpdate;
