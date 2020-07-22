import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import { LoginContext } from '../contexts/LoginContext';
import DeleteUser from './DeleteUser';

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

    fetch('/API/account/update', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: loginState.id,
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email_address: formData.email_address,
      }),
    })
      .then((response) => response.text())
      .then((text) => alert(text))
      .then(() => setLoginState(formData));
  };

  return (
    <>
      <Form onSubmit={submit}>
        <Header>Ready for a makeover?</Header>
        <p>Update anything you'd like.</p>
        <Form.Field>
          <label htmlFor="username">
            <b>Username: </b>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleFormChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="first_name">
            <b>First Name: </b>
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleFormChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="last_name">
            <b>Last Name: </b>
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleFormChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email_address">
            <b>Email: </b>
          </label>
          <input
            type="email"
            id="email_address"
            name="email_address"
            value={formData.email_address}
            onChange={handleFormChange}
          />
        </Form.Field>
        <Button type="submit">Update Your Info</Button>
      </Form>
      <DeleteUser />
    </>
  );
};

export default UserUpdate;
