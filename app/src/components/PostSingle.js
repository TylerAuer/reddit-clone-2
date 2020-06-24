import React from 'react';
import { css, jsx } from '@emotion/core';
import getSinglePost from '../functions/getSinglePost';

const PostSingle = (props) => {
  const post = (
    <div className="post">
      <h2>{props.postData.title}</h2>
      <div>By: {props.postData.author}</div>
      <p>{props.postData.body}</p>
      <div>Created: {new Date(props.postData.createdAt).toDateString()}</div>
      <div>
        Last Updated: {new Date(props.postData.lastUpdated).toDateString()}
      </div>
    </div>
  );

  return props.postData ? post : <div>Post loading...</div>;
};

export default PostSingle;
