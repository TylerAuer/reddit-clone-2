const commentsAPI = require('../api/comments');

const createNewComment = async (req, res) => {
  console.log(
    `COMMENT: Creating a new comment by ${req.body.author} with parent of ${req.body.parent}`
  );
  await commentsAPI.createNewComment(req.body);
  res.send('Comment created');
};

const deleteComment = async (req, res) => {
  console.log(`COMMENT: Deleting comment with ID of ${req.query.commentID}`);
  await commentsAPI.deleteComment(req.query.commentID);
  res.send('Comment deleted');
};

module.exports = {
  createNewComment,
  deleteComment,
};
