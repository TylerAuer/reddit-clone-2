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
    order: [['createdAt', 'ASC']], // newer comments first;
    include: [models.user],
  });

  const heartsRawArr = await models.content.findAll({
    where: {
      content_type: 7,
      content_parent: postID,
    },
    order: [['creator', 'ASC']],
  });

  const heartsUserIDOnlyArr = heartsRawArr.map((heart) => heart.creator);

  const postInfo = {
    id: post.id,
    author: post.user.dataValues.username,
    authorID: post.user.dataValues.id,
    title: post.metadata.post_title,
    body: post.metadata.post_body,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    comments: comments,
    hearts: heartsUserIDOnlyArr,
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

const deletePost = async (postID) => {
  await models.content
    .destroy({
      where: {
        content_parent: postID,
      },
    })
    .catch((error) => console.error(error));

  await models.content
    .destroy({
      where: {
        id: postID,
      },
    })
    .catch((error) => console.error(error));

  return;
};

module.exports = { createNewPost, readPost, updatePost, deletePost };
