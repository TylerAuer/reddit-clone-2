import React from 'react';
import { Container, Divider, Header, Button } from 'semantic-ui-react';
import { formatDistance } from 'date-fns';
import { FEATURES } from '../constants';
import { LoginContext } from '../contexts/LoginContext';
import { FeatureContext } from '../contexts/FeatureContext';
import deletePost from '../functions/deletePost';
import getSinglePost from '../functions/getSinglePost';
import FormCommentCreate from './FormCommentCreate';
import FeedOfComments from './FeedOfComments';
import splitTextIntoPTags from '../functions/splitTextIntoPTags';
import FormPostEdit from './FormPostEdit';

const PostFull = ({ postID }) => {
  const [loginContext] = React.useContext(LoginContext);
  const [, setFeatureContext] = React.useContext(FeatureContext);
  const [showCreateComment, setShowCreateComment] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
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
  }, [postID, editMode, showCreateComment]);

  const bodySplitIntoPTags = splitTextIntoPTags(postInfo.body);

  const viewPost = (
    <Container>
      <Header as="h2">{postInfo.title}</Header>
      <p as="h3">
        By: {postInfo.author}{' '}
        <span style={{ fontStyle: 'italic', color: 'darkgrey' }}>
          {postInfo.createdAt &&
            formatDistance(new Date(postInfo.createdAt), new Date())}{' '}
          ago
        </span>
      </p>
      <Divider />
      {bodySplitIntoPTags}
      <Container></Container>
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
      {!showCreateComment && loginContext && (
        <Button primary size="small" onClick={() => setShowCreateComment(true)}>
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

  const editPost = <FormPostEdit setEditMode={setEditMode} post={postInfo} />;

  return editMode ? editPost : viewPost;
};

export default PostFull;
