import React from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { LoginContext } from '../contexts/LoginContext';
import accountSignIn from '../functions/accountSignIn';

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

  const submit = (event) => {
    event.preventDefault();

    accountSignIn(formData.username, formData.password, setLoginState);
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
