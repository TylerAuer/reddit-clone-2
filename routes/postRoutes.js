const usersAPI = require('../api/users');
const postsAPI = require('../api/posts');

const createNewPost = async (req, res) => {
  console.log(`Trying to create new post`);
  await postsAPI.createNewPost(req.query.userID, req.query.metadata);
  res.send('Post created');
};

module.exports = {
  createNewPost,
};
