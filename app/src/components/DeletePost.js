import React from 'react';
import { Confirm, Button } from 'semantic-ui-react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import { useHistory } from 'react-router-dom';

const DeletePost = ({ postID }) => {
  const history = useHistory();
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const openConfirm = () => {
    setConfirmOpen(true);
  };

  const closeConfirm = () => {
    setConfirmOpen(false);
  };

  const onConfirmDeletePost = () => {
    fetch(`/API/post/?postID=${postID}`, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((data) => {
        toaster.notify('Your post has been deleted.');
        history.push('/');
      });
  };

  return (
    <>
      <Button color="red" onClick={openConfirm}>
        Delete Post
      </Button>
      <Confirm
        open={confirmOpen}
        onCancel={closeConfirm}
        onConfirm={onConfirmDeletePost}
        cancelButton="Wait! Don't delete this post!"
        confirmButton="Destroy this post forever."
        header="Are you sure you want to delete this post?"
        content="This will permanently delete this posts."
      />
    </>
  );
};

export default DeletePost;
