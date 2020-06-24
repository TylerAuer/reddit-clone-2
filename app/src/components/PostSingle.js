import React from 'react';
import truncate from '../functions/truncate';

const PostSingle = (props) => {
  const post = (
    <div className="post">
      <h2>{props.postData.title}</h2>
      <div>By: {props.postData.author_username}</div>
      <p>{truncate(props.postData.body, 150)}</p>
      <div>Created: {new Date(props.postData.createdAt).toDateString()}</div>
      <div>
        Last Updated: {new Date(props.postData.lastUpdated).toDateString()}
      </div>
    </div>
  );

  return props.postData ? post : <div>Post loading...</div>;
};

export default PostSingle;
