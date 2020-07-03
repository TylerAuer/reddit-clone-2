import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import { FEATURES } from '../constants';
import { LoginContext } from '../contexts/LoginContext';
import { FeatureContext } from '../contexts/FeatureContext';
import deletePost from '../functions/deletePost';

const FormPostEdit = ({ post, setEditMode }) => {
  const [loginState] = React.useContext(LoginContext);
  const [, setFeature] = React.useContext(FeatureContext);
  const [formData, setFormData] = React.useState({
    post_title: post.title,
    post_body: post.body,
  });

  const handleFormChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const submit = (event) => {
    event.preventDefault();

    fetch(`/API/post/?postID=${post.id}`, {
      method: 'PATCH',
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
      .then((data) => alert(data))
      .then(() => setEditMode(false));
  };

  return (
    <Form onSubmit={submit} id="formId">
      <Header>Edit Your Post</Header>
      <Form.Field>
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
      <Button primary onClick={submit} type="submit">
        Update your post
      </Button>
      <Button
        negative
        onClick={() => {
          deletePost(post.id);
          setEditMode(false);
        }}
      >
        Delete your post
      </Button>
    </Form>
  );
};

export default FormPostEdit;
