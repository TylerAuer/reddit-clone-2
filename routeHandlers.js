const path = require('path');
const usersAPI = require('./api/users');

// "/"
const base = (req, res) =>
  res.sendFile(path.join(__dirname + '/app/public/index.html'));

// "/API/user/[username]"
// QUESTION: I have async functions in every step here. That can't be ideal
const userGet = async (req, res) => {
  // pulls user's info from DB
  const userInfo = await usersAPI.readUser(req.query.username);
  // sends users info as JSON
  res.json(userInfo);
};

const userPost = async (req, res) => {
  const userInfo = await usersAPI.readUser(req.query.username);
  // sends users info as JSON
  res.json(userInfo);
};

module.exports = { base, userGet, userPost };
