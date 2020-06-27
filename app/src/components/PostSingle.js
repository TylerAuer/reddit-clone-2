import React from 'react';
import { FEATURES } from '../constants';
import BtnBlue from './BtnBlue';
import { LoginContext } from '../contexts/LoginContext';
import { FeatureContext } from '../contexts/FeatureContext';
import deletePost from '../functions/deletePost';

const PostFull = ({ post }) => {
  const [loginContext] = React.useContext(LoginContext);
  const [, setFeatureContext] = React.useContext(FeatureContext);

  const bodySplitIntoPTags = post.body
    .split('\n') // Split into array
    .filter((p) => p !== '') // Remove empty strings from "\n\n" in body
    .map((p, index) => <p key={index}>{p}</p>); // wrap each paragraph with <p></p>

  return (
    <div>
      <h2>{post.title}</h2>
      <h3>Author: {post.author_username}</h3>
      <div>{bodySplitIntoPTags}</div>
      <div>Created: {new Date(post.createdAt).toDateString()}</div>
      <div>Updated: {new Date(post.lastUpdated).toDateString()}</div>

      <div>
        {loginContext.id === post.author_id && (
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
                deletePost(post.id);
                setFeatureContext(FEATURES.FEED);
              }}
            >
              Delete Post
            </BtnBlue>
          </>
        )}
        <BtnBlue>Leave Comment</BtnBlue>
      </div>
      <div>Comments</div>
    </div>
  );
};

export default PostFull;

//{new Date(postData.createdAt).toDateString()}</div>
