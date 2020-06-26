const models = require('../models');

const getFeedOfAllPosts = async () => {
  // Gets raw data with foreign key
  const rawListOfPosts = await models.content.findAll({
    include: [models.user], // used foreign key to lookup user info
    order: [['updatedAt', 'DESC']], // newer posts first
  });

  // Reformats data to send
  const cleanListOfPosts = rawListOfPosts.map((data) => {
    const post = data.dataValues;
    return {
      id: post.id,
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
