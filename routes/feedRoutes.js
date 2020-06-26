const feedsAPI = require('../api/feeds');

const getFeedOfPostsByConditions = async (req, res) => {
  console.log(`Loading posts by ${req.query.authorID}`);
  const feedOfPostsByAnAuthor = await feedsAPI.getFeedOfPostsByConditions(
    req.query
  );
  res.send(feedOfPostsByAnAuthor);
};

module.exports = { getFeedOfPostsByConditions };
