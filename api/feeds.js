const { Sequelize, DataTypes } = require('sequelize');
const models = require('../models');

// Connect to postgres DB
const sequelize = new Sequelize('reddit', 'tylerauer', null, {
  host: 'localhost',
  dialect: 'postgres',
});

// sequelize.sync();

const getFeedOfAllPosts = async () => {
  // Gets raw data with foreign key
  const rawListOfPosts = await models.content.findAll({
    include: [models.user], // used foreign key to lookup user info
  });

  // Reformats data to send
  const cleanListOfPosts = rawListOfPosts.map((data) => {
    const post = data.dataValues;
    return {
      title: post.metadata.post_title,
      body: post.metadata.post_body,
      author_username: post.user.dataValues.username,
      author_id: post.creator,
      createdAt: post.createdAt,
      lastUpdated: post.updatedAt,
    };
  });

  return cleanListOfPosts;
};

module.exports = { getFeedOfAllPosts };
