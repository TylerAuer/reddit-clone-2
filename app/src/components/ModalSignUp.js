import React from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { Form, Button, Modal } from 'semantic-ui-react';
import getUserInfo from '../functions/getUserInfo';

const ModalSignUp = (props) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [, setLoginState] = React.useContext(LoginContext);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const submit = async (event) => {
    event.preventDefault();
    const elems = event.target.elements;
    const username = '?username=' + elems['username'].value;
    const first = '&first=' + elems['first'].value;
    const last = '&last=' + elems['last'].value;
    const email = '&email=' + elems['email'].value;
    const queryString = username + first + last + email;

    //TODO: Add a .catch()
    await fetch('/API/user/' + queryString, {
      method: 'POST',
    })
      .then((response) => response.text())
      .then((data) => console.log(data));
    console.log(event.target);
    //getUserInfo(event.target.elements['username'].value, setLoginState);
  };

  return (
    <Modal
      trigger={
        <Button color="purple" onClick={handleOpen}>
          Sign Up
        </Button>
      }
      open={modalOpen}
      onClose={handleClose}
      centered={false}
      size="mini"
      closeIcon
    >
      <Modal.Header>Hey, you look new!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={submit}>
            <Form.Field>
              <label htmlFor="username">
                <b>Username: </b>
              </label>
              <input type="text" id="username" name="username" />
            </Form.Field>
            <Form.Field>
              <label htmlFor="first">
                <b>First Name: </b>
              </label>
              <input type="text" id="first" name="first" />
            </Form.Field>
            <Form.Field>
              <label htmlFor="last">
                <b>Last Name: </b>
              </label>
              <input type="text" id="last" name="last" />
            </Form.Field>
            <Form.Field>
              <label htmlFor="email">
                <b>Email: </b>
              </label>
              <input type="email" id="email" name="email" /> <br />
            </Form.Field>
            <Button type="submit">Join!</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalSignUp;
