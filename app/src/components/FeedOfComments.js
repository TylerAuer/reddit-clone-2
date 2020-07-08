import React from 'react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import { formatDistance } from 'date-fns';
import { Confirm, Container, Divider, Header, Button } from 'semantic-ui-react';
import { LoginContext } from '../contexts/LoginContext';
import splitTextIntoPTags from '../functions/splitTextIntoPTags';
import ProfileReference from './ProfileReference';

const DeleteCommentBtn = (props) => {
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const openConfirm = () => {
    setConfirmOpen(true);
  };

  const closeConfirm = () => {
    setConfirmOpen(false);
  };

  const onConfirmedDelete = () => {
    fetch(`/API/comment/?commentID=${props.commentID}`, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .then(() => {
        const newComments = [...props.postInfo.comments];
        newComments.splice(props.index, 1);

        props.setPostInfo({
          ...props.postInfo,
          comments: newComments,
        });
        toaster.notify('Your comment has been deleted.');
      });
  };

  return (
    <>
      <Button size="mini" negative onClick={openConfirm}>
        Delete Your Comment
      </Button>
      <Confirm
        open={confirmOpen}
        onCancel={closeConfirm}
        onConfirm={onConfirmedDelete}
        cancelButton="Wait! Don't delete this comment!"
        confirmButton="Delete this comment forever."
        header="Are you sure you want to delete this comment?"
        content="This will permanently delete this comment."
      />
    </>
  );
};

const SingleCommentInFeed = ({ commentData, postInfo, setPostInfo, index }) => {
  const [login] = React.useContext(LoginContext);
  const commentSplitIntoPTags = splitTextIntoPTags(commentData.metadata);

  const comment = (
    <>
      <Divider />
      <Container style={{ borderLeft: '2px grey solid', paddingLeft: '20px' }}>
        <div>{commentSplitIntoPTags}</div>
        <br />

        <ProfileReference userID={commentData.creator}>
          <span style={{ color: 'blue', cursor: 'pointer' }}>
            {commentData.user.username}
          </span>{' '}
          <span style={{ fontStyle: 'italic', color: 'darkgrey' }}>
            {formatDistance(new Date(commentData.createdAt), new Date())} ago
          </span>
        </ProfileReference>
      </Container>
      <br />
      {login.id === commentData.creator && (
        <DeleteCommentBtn
          index={index}
          postInfo={postInfo}
          setPostInfo={setPostInfo}
          commentID={commentData.id}
        />
      )}
    </>
  );
  return comment;
};

const FeedOfComments = (props) => {
  const commentList = props.comments.map((comment, index) => (
    <SingleCommentInFeed
      postInfo={props.postInfo}
      setPostInfo={props.setPostInfo}
      commentData={comment}
      key={comment.id}
      index={index}
    />
  ));

  return (
    <>
      {commentList.length > 0 && <Header as="h3">Comments</Header>}
      {commentList}
    </>
  );
};

export default FeedOfComments;
