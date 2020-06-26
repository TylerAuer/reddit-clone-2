import React from 'react';

const PostFull = (props) => {
  const bodySplitIntoPTags = props.post.body
    .split('\n') // Split into array
    .filter((p) => p !== '') // Remove empty strings from "\n\n" in body
    .map((p, index) => <p key={index}>{p}</p>); // wrap each paragraph with <p></p>

  return (
    <div>
      <h2>{props.post.title}</h2>
      <h3>Author: {props.post.author_username}</h3>
      <div>{bodySplitIntoPTags}</div>
      <div>Created: {new Date(props.post.createdAt).toDateString()}</div>
      <div>Updated: {new Date(props.post.lastUpdated).toDateString()}</div>

      <div>Comments</div>
    </div>
  );
};

export default PostFull;

//{new Date(props.postData.createdAt).toDateString()}</div>
