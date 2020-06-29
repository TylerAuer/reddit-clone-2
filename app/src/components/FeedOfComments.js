import React from 'react';
import { LoginContext } from '../contexts/LoginContext';
import BtnBlue from './BtnBlue';
import splitTextIntoPTags from '../functions/splitTextIntoPTags';

const SingleCommentInFeed = ({ commentData }) => {
  const [login] = React.useContext(LoginContext);
  const commentSplitIntoPTags = splitTextIntoPTags(commentData.metadata);

  const deleteOnClick = (commentID) => {
    if (window.confirm('Are you sure you want to delete your comment?')) {
      fetch(`/API/comment/?commentID=${commentID}`, {
        method: 'DELETE',
      })
        .then((response) => response.text())
        .then((data) => console.log(data));
    }
  };

  const comment = (
    <div className="comment">
      <div>{commentSplitIntoPTags}</div>
      <div>
        By: {commentData.user.username} on{' '}
        {new Date(commentData.createdAt).toDateString()}
      </div>
      {login.id === commentData.creator && (
        <BtnBlue
          onClick={() => {
            deleteOnClick(commentData.id);
          }}
        >
          Delete Your Comment
        </BtnBlue>
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
