const models = require('../models');

const getFeedOfPostsByConditions = async (query) => {
  // search by created
  // search by lastupdated

  const conditions = {
    include: [models.user], // used foreign key to lookup user info
    order: [['createdAt', 'DESC']], // newer posts first;
  };

  if (query && query.authorID) {
    conditions.include = {
      model: models.user,
      where: {
        id: query.authorID,
      },
    };
  }

  const rawListOfPosts = await models.content.findAll(conditions);

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

module.exports = { getFeedOfPostsByConditions };
