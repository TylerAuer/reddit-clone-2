const postsAPI = require('../api/posts');

const createNewPost = async (req, res) => {
  console.log(`Create new post`);
  await postsAPI.createNewPost(req.query.userID, req.body);
  res.send('Post created');
};

const readSinglePost = async (req, res) => {
  console.log(`Getting info for a single post`);
  const postData = await postsAPI.readSinglePost(req.query.postID);
  res.send(postData);
};

module.exports = {
  createNewPost,
  readSinglePost,
};
