import React from 'react';
import { FEATURES } from '../constants';
import GenericBtn from './GenericBtn';
import { LoginContext } from '../contexts/LoginContext';
import { ActiveFeatureContext } from '../contexts/ActiveFeatureContext';

const PostFull = ({ post }) => {
  const [loginContext] = React.useContext(LoginContext);
  const [activeFeatureContext, setActiveFeatureContext] = React.useContext(
    ActiveFeatureContext
  );

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
            <GenericBtn
              onClick={() => {
                setActiveFeatureContext(FEATURES.POST_UPDATE);
              }}
            >
              Edit Post
            </GenericBtn>
            <GenericBtn>Delete Post</GenericBtn>
          </>
        )}
        <GenericBtn>Leave Comment</GenericBtn>
      </div>
      <div>Comments</div>
    </div>
  );
};

export default PostFull;

//{new Date(postData.createdAt).toDateString()}</div>
