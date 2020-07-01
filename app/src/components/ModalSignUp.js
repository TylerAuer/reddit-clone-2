import React from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { Form, Button, Modal } from 'semantic-ui-react';
import getUserInfo from '../functions/getUserInfo';

const ModalSignUp = (props) => {
  const [, setLoginState] = React.useContext(LoginContext);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    username: '',
    first: '',
    last: '',
    email: '',
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
    const username = '?username=' + formData.username;
    const first = '&first=' + formData.first;
    const last = '&last=' + formData.last;
    const email = '&email=' + formData.email;
    const queryString = username + first + last + email;

    //TODO: Add a .catch()
    await fetch('/API/user/' + queryString, {
      method: 'POST',
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .then(() => getUserInfo(formData.username, setLoginState));
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
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleFormChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="first">
                <b>First Name: </b>
              </label>
              <input
                type="text"
                id="first"
                name="first"
                value={formData.first}
                onChange={handleFormChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="last">
                <b>Last Name: </b>
              </label>
              <input
                type="text"
                id="last"
                name="last"
                value={formData.last}
                onChange={handleFormChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="email">
                <b>Email: </b>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
              />
            </Form.Field>
            <Button type="submit">Join!</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalSignUp;
