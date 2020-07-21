const feedsAPI = require('../api/feeds');

const getFeedOfPostsByConditions = async (req, res) => {
  console.log(req.query);
  if (Object.keys(req.query).length) {
    console.log(`FEED: Generating new feed with conditions:`);
    for (const condition in req.query) {
      console.log(`  ${condition}: ${req.query[condition]}`);
    }
  } else {
    console.log(`FEED: Generating feed of all posts.`);
  }
  const feedOfPostsByAnAuthor = await feedsAPI.getFeedOfPostsByConditions(
    req.query
  );
  res.send(feedOfPostsByAnAuthor);
};

module.exports = { getFeedOfPostsByConditions };
