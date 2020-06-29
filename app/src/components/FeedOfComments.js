import React from 'react';

const SingleCommentInFeed = ({ commentData }) => {
  const comment = (
    <div className="comment">
      <div>{commentData.metadata}</div>
      <div>
        By: {commentData.creator} on{' '}
        {new Date(commentData.createdAt).toDateString()}
      </div>
    </div>
  );
  return comment;
};

const FeedOfComments = (props) => {
  return props.comments.map((comment) => (
    <SingleCommentInFeed commentData={comment} />
  ));
};

export default FeedOfComments;
