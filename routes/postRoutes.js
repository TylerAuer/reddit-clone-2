const postsAPI = require('../api/posts');

const createNewPost = async (req, res) => {
  console.log(`POSTS: Creating a new post by ${req.body.author}`);
  await postsAPI.createNewPost(req.query.userID, req.body);
  res.send('Post created');
};

const readSinglePost = async (req, res) => {
  console.log(`POSTS: Getting info for post ID: ${req.query.postID}`);
  const postData = await postsAPI.readSinglePost(req.query.postID);
  res.send(postData);
};

module.exports = {
  createNewPost,
  readSinglePost,
};
