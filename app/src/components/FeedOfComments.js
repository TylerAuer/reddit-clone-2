import React from 'react';
import { formatDistance } from 'date-fns';
import { Container, Divider, Header, Button } from 'semantic-ui-react';
import { LoginContext } from '../contexts/LoginContext';
import splitTextIntoPTags from '../functions/splitTextIntoPTags';
import ProfileReference from './ProfileReference';

const SingleCommentInFeed = ({ commentData, postInfo, setPostInfo, index }) => {
  const [login] = React.useContext(LoginContext);
  const commentSplitIntoPTags = splitTextIntoPTags(commentData.metadata);

  const deleteOnClick = (commentID) => {
    if (window.confirm('Are you sure you want to delete your comment?')) {
      fetch(`/API/comment/?commentID=${commentID}`, {
        method: 'DELETE',
      })
        .then((response) => response.text())
        .then((data) => console.log(data))
        .then(() => {
          const newComments = [...postInfo.comments];
          newComments.splice(index, 1);

          setPostInfo({
            ...postInfo,
            comments: newComments,
          });
        });
    }
  };

  const comment = (
    <>
      <Divider />
      <Container style={{ borderLeft: '2px grey solid', paddingLeft: '20px' }}>
        <div>{commentSplitIntoPTags}</div>
        <br />
        <p>
          <ProfileReference username={commentData.user.username}>
            <span style={{ color: 'blue', cursor: 'pointer' }}>
              {commentData.user.username}
            </span>{' '}
            <span style={{ fontStyle: 'italic', color: 'darkgrey' }}>
              {formatDistance(new Date(commentData.createdAt), new Date())} ago
            </span>
          </ProfileReference>
        </p>
      </Container>
      <br />
      {login.id === commentData.creator && (
        <Button
          size="small"
          negative
          onClick={() => {
            deleteOnClick(commentData.id);
          }}
        >
          Delete Your Comment
        </Button>
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
