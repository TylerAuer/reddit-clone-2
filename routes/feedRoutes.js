const feedsAPI = require('../api/feeds');

const getFeedOfAllPosts = async (req, res) => {
  console.log('Loading all posts for feed');
  const feedOfAllPosts = await feedsAPI.getFeedOfAllPosts();
  res.send(feedOfAllPosts);
};

const getFeedOfPostsByConditions = async (req, res) => {
  console.log(`Loading posts by ${req.query.authorID}`);
  const feedOfPostsByAnAuthor = await feedsAPI.getFeedOfPostsByConditions(
    req.query
  );
  res.send(feedOfPostsByAnAuthor);
};

module.exports = { getFeedOfAllPosts, getFeedOfPostsByConditions };
