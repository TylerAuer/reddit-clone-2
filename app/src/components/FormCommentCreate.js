import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { LoginContext } from '../contexts/LoginContext';
import createComment from '../functions/createComment';

const FormCommentCreate = (props) => {
  const [loginState] = React.useContext(LoginContext);
  const [formData, setFormData] = React.useState({
    comment_body: '',
  });

  const handleFormChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const submit = (event) => {
    event.preventDefault();
    createComment(loginState.id, props.parent, formData.comment_body);
    props.setShowAddCommentForm(false);
    // refresh comment feed
  };

  return (
    <Form onSubmit={submit} id="formId">
      <Form.Field>
        <label htmlFor="comment_body">
          <b>Leave a comment: </b>

          <textarea
            id="comment_body"
            name="comment_body"
            value={formData.comment_body}
            multiline="true"
            onChange={handleFormChange}
          />
        </label>
      </Form.Field>
      <Button onClick={submit} type="submit">
        Submit this comment!
      </Button>
    </Form>
  );
};

export default FormCommentCreate;
