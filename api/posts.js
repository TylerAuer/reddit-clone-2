const { Sequelize, DataTypes } = require('sequelize');
const content = require('../models/content');
const user = require('../models/user');
// Connect to postgres DB
const sequelize = new Sequelize('reddit', 'tylerauer', null, {
  host: 'localhost',
  dialect: 'postgres',
});

const createNewPost = (userID, metadata) => {
  return content(sequelize, DataTypes)
    .create({
      content_type: 4,
      creator: userID,
      metadata: metadata,
    })
    .catch((error) => console.error(error));
};

const readSinglePost = async (postID) => {
  // Gets post info
  const post = await content(sequelize, DataTypes)
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
  const creator = await user(sequelize, DataTypes).findOne({
    attributes: ['username'],
    where: {
      id: post.creator,
    },
  });

  console.log(post.metadata.author);
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
