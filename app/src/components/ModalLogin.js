import React from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { LoginContext } from '../contexts/LoginContext';
import getUserInfo from '../functions/getUserInfo';

const ModalLogin = (props) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [, setLoginState] = React.useContext(LoginContext);

  const handleOpen = () => setModalOpen(true);

  const handleClose = () => setModalOpen(false);

  const submit = (event) => {
    event.preventDefault();
    const elems = event.target.elements;
    const username = elems['username'].value;
    // const password = elems['password'].value;

    getUserInfo(username, setLoginState);
    setModalOpen(false);
  };

  return (
    <Modal
      trigger={
        <Button color="teal" onClick={handleOpen}>
          Log In
        </Button>
      }
      open={modalOpen}
      onClose={handleClose}
    >
      <Modal.Header>Log in to your account</Modal.Header>
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
                placeholder={'Username'}
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
                placeholder={'Password'}
              />
            </Form.Field>
            <Button type="submit">Login</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalLogin;
