import React from 'react';
import { css, jsx } from '@emotion/core';
import getSinglePost from '../functions/getSinglePost';

const Feed = (props) => {
  const [postData, setPostData] = React.useState(false);

  React.useEffect(() => {
    getSinglePost(props.postID, setPostData);
  }, [props.postID]); // Only make API call if postID changes

  const post = (
    <div className="post">
      <h2>{postData.title}</h2>
      <div>By: {postData.author}</div>
      <p>{postData.body}</p>
      <div>Created: {new Date(postData.createdAt).toDateString()}</div>
      <div>Last Updated: {new Date(postData.updatedAt).toDateString()}</div>
    </div>
  );

  return postData ? post : <div>Post loading...</div>;
};

export default Feed;
