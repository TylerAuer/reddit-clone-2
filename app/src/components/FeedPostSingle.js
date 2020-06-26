import React from 'react';
import truncate from '../functions/truncate';

const FeedPostSingle = (props) => {
  const post = (
    <div className="post">
      <h2 onClick={() => props.onClickPost(props.postData)}>
        {props.postData.title}
      </h2>
      <div>By: {props.postData.author_username}</div>
      <p>{truncate(props.postData.body, 150)}</p>
    </div>
  );

  return props.postData ? post : <div>Post loading...</div>;
};

export default FeedPostSingle;
