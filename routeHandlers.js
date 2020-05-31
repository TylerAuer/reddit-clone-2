const path = require('path');
const usersAPI = require('./api/users');

// "/"
const baseRouteHandler = (req, res) =>
  res.sendFile(path.join(__dirname + '/app/public/index.html'));

// "/API/user/[username]"
// QUESTION: I have async functions in every step here. That can't be ideal
const userRouteHandler = async (req, res) => {
  // pulls user's info from DB
  const userInfo = await usersAPI.readUser(req.params.username);
  // sends users info as JSON
  res.json(userInfo);
};

const userQueryRouteHandler = async (req, res) => {
  const userInfo = await usersAPI.readUser(req.query.username);
  // sends users info as JSON
  res.json(userInfo);
};

module.exports = { baseRouteHandler, userRouteHandler, userQueryRouteHandler };
