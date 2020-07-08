const models = require('../models');

const getFeedOfPostsByConditions = async (query) => {
  // search by created
  // search by lastupdated

  const conditions = {
    include: [models.user], // used foreign key to lookup user info
    order: [['updatedAt', 'DESC']], // newer posts first;
    where: { content_type: 4 }, // Only return posts
    limit: query.post_count, // How many posts to return
    offset: query.offset, // How many posts to skip (usually post_count * current_page)
  };

  // TODO: Use spread operator here to add multiple conditions into the include
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
  const cleanListOfPosts = await rawListOfPosts.map(async (data) => {
    const post = data.dataValues;
    const comments = await models.content.findAll({
      where: { content_parent: post.id, content_type: 5 },
    });
    const hearts = await models.content.findAll({
      where: { content_parent: post.id, content_type: 7 },
    });

    return {
      id: post.id,
      title: post.metadata.post_title,
      body: post.metadata.post_body,
      author_username: post.user.dataValues.username,
      author_id: post.creator,
      createdAt: post.createdAt,
      lastUpdated: post.updatedAt,
      commentCount: comments.length,
      heartCount: hearts.length,
    };
  });

  return Promise.all(cleanListOfPosts);
};

module.exports = { getFeedOfPostsByConditions };
