import React from 'react';
import { Container, Divider, Header, Button } from 'semantic-ui-react';
import { formatDistance } from 'date-fns';
import { LoginContext } from '../contexts/LoginContext';
import ProfileReference from './ProfileReference';
import FormCommentCreate from './FormCommentCreate';
import FeedOfComments from './FeedOfComments';
import splitTextIntoPTags from '../functions/splitTextIntoPTags';
import DeletePost from './DeletePost';
import HeartBtn from './HeartBtn';

const PostDisplay = ({
  setEditMode,
  setPostInfo,
  postInfo,
  setShowAddCommentForm,
  showAddCommentForm,
}) => {
  const [login] = React.useContext(LoginContext);

  const bodySplitIntoPTags = splitTextIntoPTags(postInfo.body);

  return (
    <Container>
      <Header as="h2">{postInfo.title}</Header>
      <div as="h3">
        <ProfileReference username={postInfo.author}>
          <span style={{ color: 'blue', cursor: 'pointer' }}>
            {postInfo.author}
          </span>{' '}
        </ProfileReference>
        <span style={{ fontStyle: 'italic', color: 'darkgrey' }}>
          {postInfo.createdAt &&
            formatDistance(new Date(postInfo.createdAt), new Date())}{' '}
          ago
        </span>
      </div>
      <Divider />
      {bodySplitIntoPTags}
      <Container>
        {login && (
          <HeartBtn
            postInfo={postInfo}
            setPostInfo={setPostInfo}
            size="medium"
          />
        )}
        {login.id === postInfo.authorID && (
          <>
            <Button
              onClick={() => {
                setEditMode(true);
              }}
            >
              Edit Post
            </Button>
            <DeletePost postID={postInfo.id} />
          </>
        )}
      </Container>
      <FeedOfComments
        postInfo={postInfo}
        setPostInfo={setPostInfo}
        comments={postInfo.comments}
      />
      <Divider />
      {!showAddCommentForm && login && (
        <Button
          primary
          size="small"
          onClick={() => setShowAddCommentForm(true)}
        >
          Leave New Comment
        </Button>
      )}
      {showAddCommentForm && (
        <FormCommentCreate
          setShowAddCommentForm={setShowAddCommentForm}
          parent={postInfo.id}
        />
      )}
    </Container>
  );
};

export default PostDisplay;
