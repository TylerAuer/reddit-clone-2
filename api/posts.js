const models = require('../models');

const createNewPost = (userID, metadata) => {
  return models.content
    .create({
      content_type: 4,
      creator: userID,
      metadata: metadata,
    })
    .catch((error) => console.error(error));
};

const readPost = async (postID) => {
  // Gets post info
  const post = await models.content.findOne({
    attributes: ['id', 'creator', 'metadata', 'createdAt', 'updatedAt'],
    where: {
      id: postID,
    },
    include: [models.user],
  });

  // Gets comments for the post
  const comments = await models.content.findAll({
    where: {
      content_type: 5,
      content_parent: postID,
    },
  });

  console.log(post.user);
  const postInfo = {
    id: post.id,
    author: post.user.dataValues.username,
    authorID: post.user.dataValues.id,
    title: post.metadata.post_title,
    body: post.metadata.post_body,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    comments: comments,
  };

  return postInfo;
};

const updatePost = (postID, metadata) => {
  return models.content
    .update(
      {
        metadata: metadata,
      },
      {
        where: {
          id: postID,
        },
      }
    )
    .catch((error) => console.error(error));
};

const deletePost = (postID) => {
  return models.content
    .destroy({
      where: {
        id: postID,
      },
    })
    .catch((error) => console.error(error));
};

module.exports = { createNewPost, readPost, updatePost, deletePost };
