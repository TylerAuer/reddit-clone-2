import React from 'react';
import { Container, Divider, Header, Button } from 'semantic-ui-react';
import { formatDistance } from 'date-fns';
import { FEATURES } from '../constants';
import { LoginContext } from '../contexts/LoginContext';
import { FeatureContext } from '../contexts/FeatureContext';
import ProfileReference from './ProfileReference';
import FormCommentCreate from './FormCommentCreate';
import FeedOfComments from './FeedOfComments';
import deletePost from '../functions/deletePost';
import splitTextIntoPTags from '../functions/splitTextIntoPTags';

const PostDisplay = ({
  setEditMode,
  setPostInfo,
  postInfo,
  setShowAddCommentForm,
  showAddCommentForm,
}) => {
  const [loginContext] = React.useContext(LoginContext);
  const [, setFeatureContext] = React.useContext(FeatureContext);

  const bodySplitIntoPTags = splitTextIntoPTags(postInfo.body);

  return (
    <Container>
      <Header as="h2">{postInfo.title}</Header>
      <p as="h3">
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
      </p>
      <Divider />
      {bodySplitIntoPTags}
      <Container>
        {loginContext.id === postInfo.authorID && (
          <>
            <Button
              onClick={() => {
                setEditMode(true);
              }}
            >
              Edit Post
            </Button>
            <Button
              negative
              onClick={() => {
                deletePost(postInfo.id);
                setFeatureContext(FEATURES.FEED);
              }}
            >
              Delete Post
            </Button>
          </>
        )}
      </Container>
      <FeedOfComments
        postInfo={postInfo}
        setPostInfo={setPostInfo}
        comments={postInfo.comments}
      />
      <Divider />
      {!showAddCommentForm && loginContext && (
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
