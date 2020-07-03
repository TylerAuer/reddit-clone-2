import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import { FEATURES } from '../constants';
import { LoginContext } from '../contexts/LoginContext';
import { FeatureContext } from '../contexts/FeatureContext';
import deletePost from '../functions/deletePost';
import truncate from '../functions/truncate';

const FormPostEdit = ({ postInfo, setEditMode }) => {
  const [loginState] = React.useContext(LoginContext);
  const [, setActiveFeature] = React.useContext(FeatureContext);
  const [formData, setFormData] = React.useState({
    post_title: postInfo.title,
    post_body: postInfo.body,
  });

  const handleFormChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const submit = (event) => {
    event.preventDefault();

    fetch(`/API/post/?postID=${postInfo.id}`, {
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
      .then((data) => {
        toaster.notify(
          `We've updated your post "${truncate(formData.post_title, 25)}"`
        );
        setEditMode(false);
      });
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
          deletePost(postInfo.id);
          toaster.notify(
            `We've deleted your post. Makes sense, it wasn't your best work IMHO.`
          );
          setEditMode(false);
          setActiveFeature(FEATURES.FEED);
        }}
      >
        Delete your post
      </Button>
    </Form>
  );
};

export default FormPostEdit;
