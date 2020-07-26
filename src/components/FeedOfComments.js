import React from 'react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import { formatDistance } from 'date-fns';
import { Confirm, Container, Divider, Header, Button } from 'semantic-ui-react';
import { LoginContext } from '../contexts/LoginContext';
import splitTextIntoPTags from '../functions/splitTextIntoPTags';
import ProfileReference from './ProfileReference';
import { useTrail, animated } from 'react-spring';

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
      {login && login.id === commentData.creator && (
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

const FeedOfComments = ({ postInfo, setPostInfo, comments }) => {
  const trail = useTrail(comments.length, {
    from: { marginLeft: -10, opacity: 0 },
    to: { marginLeft: 0, opacity: 1 },
  });

  const commentList = trail.map((props, index) => (
    <animated.div key={comments[index]} style={props}>
      <SingleCommentInFeed
        postInfo={postInfo}
        setPostInfo={setPostInfo}
        commentData={comments[index]}
        key={comments[index].id}
        index={index}
      />
    </animated.div>
  ));

  return (
    <>
      {commentList.length > 0 && <Header as="h3">Comments</Header>}
      {commentList}
    </>
  );
};

export default FeedOfComments;
