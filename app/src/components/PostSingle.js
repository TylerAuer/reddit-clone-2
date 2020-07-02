import React from 'react';
import { Container, Divider, Header, Button } from 'semantic-ui-react';
import { FEATURES } from '../constants';
import { LoginContext } from '../contexts/LoginContext';
import { FeatureContext } from '../contexts/FeatureContext';
import deletePost from '../functions/deletePost';
import getSinglePost from '../functions/getSinglePost';
import FormCommentCreate from './FormCommentCreate';
import FeedOfComments from './FeedOfComments';
import splitTextIntoPTags from '../functions/splitTextIntoPTags';

const PostFull = ({ postID }) => {
  const [loginContext] = React.useContext(LoginContext);
  const [, setFeatureContext] = React.useContext(FeatureContext);
  const [showCreateComment, setShowCreateComment] = React.useState(false);
  const [postInfo, setPostInfo] = React.useState({
    id: '',
    author: '',
    title: '',
    body: '',
    createdAt: '',
    updatedAt: '',
    comments: [],
  });

  React.useEffect(() => {
    getSinglePost(postID, setPostInfo);
  }, [postID, showCreateComment]);

  const bodySplitIntoPTags = splitTextIntoPTags(postInfo.body);

  return (
    <Container>
      <Header as="h2">{postInfo.title}</Header>
      <Header as="h3">Author: {postInfo.author}</Header>
      <Divider />
      {bodySplitIntoPTags}
      <Container>
        Created: {new Date(postInfo.createdAt).toDateString()} | Updated:{' '}
        {new Date(postInfo.updatedAt).toDateString()}
      </Container>
      <Container>
        {loginContext.id === postInfo.authorID && (
          <>
            <Button
              onClick={() => {
                setFeatureContext(FEATURES.POST_UPDATE);
              }}
            >
              Edit Post
            </Button>
            <Button
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
      <FeedOfComments comments={postInfo.comments} />
      <Divider />
      {!showCreateComment && loginContext && (
        <Button onClick={() => setShowCreateComment(true)}>
          Leave New Comment
        </Button>
      )}
      {showCreateComment && (
        <FormCommentCreate
          showForm={setShowCreateComment}
          parent={postInfo.id}
        />
      )}
    </Container>
  );
};

export default PostFull;
