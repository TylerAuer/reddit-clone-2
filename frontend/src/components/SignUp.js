import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import { Form, Button, Container, Header } from 'semantic-ui-react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

const SignUp = (props) => {
  let history = useHistory();
  const [loginState, setLoginState] = React.useContext(LoginContext);
  const [formData, setFormData] = React.useState({
    username: '',
    password1: '',
    password2: '',
    first: '',
    last: '',
    email: '',
  });
  const [formErrors, setFormErrors] = React.useState([]);

  const handleFormChange = (event, data) => {
    setFormData({
      ...formData,
      [data.id]: data.value,
    });
  };

  const validateForm = () => {
    let isFormValid = true;
    const newFormErrors = [];

    if (formData.password1.length < 8) {
      isFormValid = false;
      newFormErrors.push('password1');
    }

    if (formData.password1 !== formData.password2) {
      isFormValid = false;
      newFormErrors.push('password2');
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      isFormValid = false;
      newFormErrors.push('email');
    }
    setFormErrors(newFormErrors);
    return isFormValid;
  };

  const submit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      fetch('/API/account/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          first_name: formData.first,
          last_name: formData.last,
          email_address: formData.email,
          password: formData.password1,
        }),
      })
        .then((response) => {
          if (response.status !== 200) {
            throw response.status;
          }
          response.json();
        })
        .then((data) => {
          setLoginState(data);
          history.push('/feed');
        })
        .catch((errorCode) => {
          if (errorCode === 409) {
            toaster.notify(
              `${formData.username} is already taken. Please select a new username.`
            );
          } else {
            toaster.notify(`An unknown error occured. [ERR: ${errorCode}]`);
          }
        });
    }
  };

  if (loginState) {
    return (
      <>
        <Header>Please, sign out in order to create an account.</Header>
        <Button onClick={() => setLoginState(null)}>
          Sign Out as {loginState.username}
        </Button>
      </>
    );
  }

  return (
    <Container text>
      <Header as="h2">Create an Account</Header>
      <Form onSubmit={submit}>
        <Form.Input
          error={
            formErrors.includes('username')
              ? { content: 'Please select a username', pointing: 'below' }
              : null
          }
          fluid
          label="Username"
          id="username"
          required
          onChange={handleFormChange}
        />
        <Form.Input
          error={
            formErrors.includes('password1')
              ? {
                  content:
                    'Please create a password that is at least 10 characters long.',
                  pointing: 'below',
                }
              : null
          }
          fluid
          type="password"
          label="Enter Password"
          id="password1"
          required
          onChange={handleFormChange}
        />
        <Form.Input
          error={
            formErrors.includes('password2')
              ? {
                  content:
                    "Be sure that you've entered the same password as above.",
                  pointing: 'below',
                }
              : null
          }
          fluid
          type="password"
          label="Reenter Password"
          id="password2"
          required
          onChange={handleFormChange}
        />
        <Form.Group widths="equal">
          <Form.Input
            error={
              formErrors.includes('first')
                ? {
                    content: 'Please enter your first name.',
                    pointing: 'below',
                  }
                : null
            }
            fluid
            label="First Name"
            id="first"
            required
            onChange={handleFormChange}
          />
          <Form.Input
            error={
              formErrors.includes('last')
                ? {
                    content: 'Please enter your last name.',
                    pointing: 'below',
                  }
                : null
            }
            fluid
            label="Last Name"
            id="last"
            required
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Input
          error={
            formErrors.includes('email')
              ? {
                  content: 'Please enter a valid email address.',
                  pointing: 'below',
                }
              : null
          }
          fluid
          label="Email"
          id="email"
          required
          onChange={handleFormChange}
        />
        <Button type="submit">Join!</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
