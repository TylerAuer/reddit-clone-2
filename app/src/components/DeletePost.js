import React from 'react';
import { Confirm, Button } from 'semantic-ui-react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import { FEATURES } from '../constants';
import { FeatureContext } from '../contexts/FeatureContext';

const DeletePost = ({ postID }) => {
  const [, setActiveFeature] = React.useContext(FeatureContext);
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
        console.log(data);
        toaster.notify('Your post has been deleted.');
        setActiveFeature(FEATURES.FEED);
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
