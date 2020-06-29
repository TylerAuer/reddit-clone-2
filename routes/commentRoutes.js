const commentsAPI = require('../api/comments');

const createNewComment = async (req, res) => {
  console.log(
    `COMMENT: Creating a new comment by ${req.body.author} with parent of ${req.body.parent}`
  );
  await commentsAPI.createNewComment(req.body);
  res.send('Comment created');
};

module.exports = {
  createNewComment,
};
