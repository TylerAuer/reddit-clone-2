import React from 'react';
import { LoginContext } from '../contexts/LoginContext';
import BtnBlue from './BtnBlue';

const SingleCommentInFeed = ({ commentData }) => {
  const [login] = React.useContext(LoginContext);
  const comment = (
    <div className="comment">
      <div>{commentData.metadata}</div>
      <div>
        By: {commentData.user.username} on{' '}
        {new Date(commentData.createdAt).toDateString()}
      </div>
      {login.id === commentData.creator && (
        <BtnBlue>Delete Your Comment</BtnBlue>
      )}
    </div>
  );
  return comment;
};

const FeedOfComments = (props) => {
  return props.comments.map((comment) => (
    <SingleCommentInFeed commentData={comment} key={comment.id} />
  ));
};

export default FeedOfComments;
