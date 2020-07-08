import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import truncate from '../functions/truncate';

const FormCreatePost = (props) => {
  const history = useHistory();
  const [loginState] = React.useContext(LoginContext);

  const [formData, setFormData] = React.useState({
    post_title: '',
    post_body: '',
  });

  const handleFormChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const submit = (event) => {
    event.preventDefault();

    fetch(`/API/post/?userID=${loginState.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author: loginState.username,
        post_title: formData.post_title,
        post_body: formData.post_body,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        toaster.notify(
          `We've added your post "${truncate(
            formData.post_title,
            25
          )}" to the feed!`
        );
        history.push('/');
      });
  };

  return (
    <Form>
      <Header>Create a new post</Header>

      <Form.Field onSubmit={submit} id="formId">
        <label htmlFor="post_title">
          <b>Title: </b>
        </label>
        <input
          type="text"
          id="post_title"
          name="post_title"
          placeholder="Give your post a title"
          onChange={handleFormChange}
          value={formData.post_title}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="post_body">
          <b>Body: </b>

          <textarea
            id="post_body"
            name="post_body"
            value={formData.post_body}
            multiline="true"
            onChange={handleFormChange}
          />
        </label>
      </Form.Field>
      <Button onClick={submit} type="submit">
        Make this post official!
      </Button>
    </Form>
  );
};

export default FormCreatePost;
