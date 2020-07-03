import React from 'react';
import { formatDistance } from 'date-fns';
import { Container, Divider, Header, Button } from 'semantic-ui-react';
import { LoginContext } from '../contexts/LoginContext';
import splitTextIntoPTags from '../functions/splitTextIntoPTags';

const SingleCommentInFeed = ({ commentData }) => {
  const [login] = React.useContext(LoginContext);
  const commentSplitIntoPTags = splitTextIntoPTags(commentData.metadata);

  const deleteOnClick = (commentID) => {
    if (window.confirm('Are you sure you want to delete your comment?')) {
      fetch(`/API/comment/?commentID=${commentID}`, {
        method: 'DELETE',
      })
        .then((response) => response.text())
        .then((data) => console.log(data));
    }
  };

  const comment = (
    <>
      <Divider />
      <Container style={{ borderLeft: '2px grey solid', paddingLeft: '20px' }}>
        <div>{commentSplitIntoPTags}</div>
        <br />
        <p>
          {commentData.user.username}{' '}
          <span style={{ fontStyle: 'italic', color: 'darkgrey' }}>
            {formatDistance(new Date(commentData.createdAt), new Date())} ago
          </span>
        </p>
      </Container>
      <br />
      {login.id === commentData.creator && (
        <Button
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
  const commentList = props.comments.map((comment) => (
    <SingleCommentInFeed commentData={comment} key={comment.id} />
  ));

  return (
    <>
      <Header as="h3">Comments</Header>
      {commentList}
    </>
  );
};

export default FeedOfComments;
