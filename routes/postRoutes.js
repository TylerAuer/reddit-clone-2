const usersAPI = require('../api/users');
const postsAPI = require('../api/posts');

const createNewPost = async (req, res) => {
  console.log(`Trying to create new post`);
  console.log(req.body);
  await postsAPI.createNewPost(req.query.userID, req.body);
  res.send('Post created');
};

const readSinglePost = async (req, res) => {
  console.log(`Trying to read a post`);
  const postData = await postsAPI.readSinglePost(req.query.postID);
  res.send(postData);
};

module.exports = {
  createNewPost,
  readSinglePost,
};
