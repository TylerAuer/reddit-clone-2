const models = require('../models');

const createNewComment = (postBody) => {
  return models.content
    .create({
      content_type: 5, // Designates it as a comment
      creator: postBody.creator, // The author of the comment's id (foreign key)
      content_parent: postBody.content_parent, // The post or comment that's the parent
      metadata: postBody.commentBody,
    })
    .catch((error) => console.error(error));
};

const deleteComment = (commentID) => {
  return models.content
    .destroy({
      where: {
        id: commentID,
      },
    })
    .catch((error) => console.error(error));
};

module.exports = { createNewComment, deleteComment };
