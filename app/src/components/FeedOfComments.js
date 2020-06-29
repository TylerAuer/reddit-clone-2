import React from 'react';
import { LoginContext } from '../contexts/LoginContext';
import BtnBlue from './BtnBlue';
import splitTextIntoPTags from '../functions/splitTextIntoPTags';

const SingleCommentInFeed = ({ commentData }) => {
  const [login] = React.useContext(LoginContext);
  const commentSplitIntoPTags = splitTextIntoPTags(commentData.metadata);

  const comment = (
    <div className="comment">
      <div>{commentSplitIntoPTags}</div>
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
