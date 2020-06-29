import React from 'react';
import { FEATURES } from '../constants';
import { LoginContext } from '../contexts/LoginContext';
import { FeatureContext } from '../contexts/FeatureContext';
import deletePost from '../functions/deletePost';
import getSinglePost from '../functions/getSinglePost';
import FormCommentCreate from './FormCommentCreate';
import BtnBlue from './BtnBlue';
import FeedOfComments from './FeedOfComments';

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

  const bodySplitIntoPTags = postInfo.body
    .split('\n') // Split into array
    .filter((p) => p !== '') // Remove empty strings from "\n\n" in body
    .map((p, index) => <p key={index}>{p}</p>); // wrap each paragraph with <p></p>

  return (
    <div>
      <h2>{postInfo.title}</h2>
      <h3>Author: {postInfo.author}</h3>
      <div>{bodySplitIntoPTags}</div>
      <div>
        Created: {new Date(postInfo.createdAt).toDateString()} | Updated:{' '}
        {new Date(postInfo.updatedAt).toDateString()}
      </div>

      <div>
        {loginContext.id === postInfo.authorID && (
          <>
            <BtnBlue
              onClick={() => {
                setFeatureContext(FEATURES.POST_UPDATE);
              }}
            >
              Edit Post
            </BtnBlue>
            <BtnBlue
              onClick={() => {
                deletePost(postInfo.id);
                setFeatureContext(FEATURES.FEED);
              }}
            >
              Delete Post
            </BtnBlue>
          </>
        )}
      </div>
      <FeedOfComments comments={postInfo.comments} />
      {!showCreateComment && (
        <BtnBlue onClick={() => setShowCreateComment(true)}>
          Leave Comment
        </BtnBlue>
      )}
      {showCreateComment && (
        <FormCommentCreate
          showForm={setShowCreateComment}
          parent={postInfo.id}
        />
      )}
    </div>
  );
};

export default PostFull;
