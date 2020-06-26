const feedsAPI = require('../api/feeds');

const getFeedOfAllPosts = async (req, res) => {
  console.log('Loading all posts for feed');
  const feedOfAllPosts = await feedsAPI.getFeedOfAllPosts();
  res.send(feedOfAllPosts);
};

const getFeedOfPostsByAuthorID = async (req, res) => {
  console.log(`Loading posts by ${req.query.authorID}`);
  const feedOfPostsByAnAuthor = await feedsAPI.getFeedOfPostsByAuthorID(
    req.query.authorID
  );
  res.send(feedOfPostsByAnAuthor);
};

feedsAPI.getFeedOfPostsByAuthorID(9).then((data) => console.log(data));

module.exports = { getFeedOfAllPosts, getFeedOfPostsByAuthorID };
