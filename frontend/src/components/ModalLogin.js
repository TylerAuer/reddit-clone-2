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
            <Form.Input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleFormChange}
              fluid
              label="Username"
              required
            />
            <Form.Input
              id="password"
              type="password"
              name="password"
              value={formData.pasword}
              onChange={handleFormChange}
              fluid
              label="Password"
              required
            />
            <Button type="submit">Sign In</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalLogin;
