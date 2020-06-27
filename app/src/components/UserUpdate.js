import React from 'react';
import { LoginContext } from '../contexts/LoginContext';
import BtnWhite from './BtnWhite';

const UserUpdate = (props) => {
  const [loginState, setLoginState] = React.useContext(LoginContext);
  const [formData, setFormData] = React.useState(loginState);

  const handleFormChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const submit = (event) => {
    event.preventDefault();
    const elems = event.target.elements;
    const currentUsername = '?orig_username=' + loginState.username;
    const username = '&username=' + elems['username'].value;
    const first = '&first=' + elems['first_name'].value;
    const last = '&last=' + elems['last_name'].value;
    const email = '&email=' + elems['email_address'].value;
    const queryString = currentUsername + username + first + last + email;

    fetch('/API/user/' + queryString, {
      method: 'PATCH',
    })
      .then((response) => response.text())
      .then((text) => alert(text))
      .then(() => setLoginState(formData));
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
          value={formData.username}
          onChange={handleFormChange}
        />{' '}
        <br />
        <label htmlFor="first_name">
          <b>First Name: </b>
        </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleFormChange}
        />{' '}
        <br />
        <label htmlFor="last_name">
          <b>Last Name: </b>
        </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleFormChange}
        />{' '}
        <br />
        <label htmlFor="email_address">
          <b>Email: </b>
        </label>
        <input
          type="email"
          id="email_address"
          name="email_address"
          value={formData.email_address}
          onChange={handleFormChange}
        />{' '}
        <br />
        <BtnWhite type="submit">Update Your Info</BtnWhite>
      </form>
    </div>
  );
};

export default UserUpdate;
