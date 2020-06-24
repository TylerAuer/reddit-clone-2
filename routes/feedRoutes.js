const feedsAPI = require('../api/feeds');

const getFeedOfAllPosts = async (req, res) => {
  console.log('Loading all posts for feed');
  const feedOfAllPosts = await feedsAPI.getFeedOfAllPosts();
  res.send(feedOfAllPosts);
};

module.exports = { getFeedOfAllPosts };
