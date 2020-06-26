const postsAPI = require('../api/posts');

const createNewPost = async (req, res) => {
  console.log(`POSTS: Creating a new post by ${req.body.author}`);
  await postsAPI.createNewPost(req.query.userID, req.body);
  res.send('Post created');
};

const readPost = async (req, res) => {
  console.log(`POSTS: Getting info for post ID: ${req.query.postID}`);
  const postData = await postsAPI.readPost(req.query.postID);
  res.send(postData);
};

const updatePost = async (req, res) => {
  console.log(`POSTS: Updating post with post ID: ${req.query.postID}`);
  console.log(req.query);
  console.log(req.body);
  await postsAPI.updatePost(req.query.postID, req.body);
  res.send('Post updated.');
};

module.exports = {
  createNewPost,
  readPost,
  updatePost,
};
