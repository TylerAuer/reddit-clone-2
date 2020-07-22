import React from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { LoginContext } from '../contexts/LoginContext';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

const ModalLogin = (props) => {
  const [, setLoginState] = React.useContext(LoginContext);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submit = async (event) => {
    event.preventDefault();

    await fetch('/API/account/signin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    }).then((response) => {
      if (response.status === 401) {
        // Unautherized
        toaster.notify(`Username and password combination is incorrect`);
      } else {
        // Sign in successful
        response.json().then((response) => {
          setLoginState(response);
          toaster.notify(`Logged in as ${response.username}`);
        });
      }
    });
  };

  return (
    <Modal
      trigger={
        <Button color="teal" onClick={handleOpen}>
          Sign In
        </Button>
      }
      open={modalOpen}
      onClose={handleClose}
      centered={false}
      size="mini"
      closeIcon
    >
      <Modal.Header>Sign in to your account</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={submit}>
            <Form.Field>
              <label htmlFor="username">
                <b>Username </b>
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
              <label htmlFor="password">
                <b>Password </b>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
              />
            </Form.Field>
            <Button type="submit">Sign In</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalLogin;
