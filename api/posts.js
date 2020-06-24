const { Sequelize } = require('sequelize');
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

const readSinglePost = async (postID) => {
  // Gets post info
  const post = await models.content
    .findOne({
      attributes: ['id', 'creator', 'metadata', 'createdAt', 'updatedAt'],
      where: {
        id: postID,
      },
    })
    .catch((error) => {
      console.log(' ');
      console.log('Could not find post. ERROR MSG: ', error);
    });

  // Gets author info
  const creator = await models.user.findOne({
    attributes: ['username'],
    where: {
      id: post.creator,
    },
  });

  const postInfo = {
    id: post.id,
    author: creator.username,
    title: post.metadata.post_title,
    body: post.metadata.post_body,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  };

  return postInfo;
};

module.exports = { createNewPost, readSinglePost };
