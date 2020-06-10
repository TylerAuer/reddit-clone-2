const path = require('path');
const usersAPI = require('./api/users');

const base = (req, res) =>
  res.sendFile(path.join(__dirname + '/app/public/index.html'));

const userGet = async (req, res) => {
  const userInfo = await usersAPI.readUser(req.query.username);
  res.json(userInfo);
};

const userPost = async (req, res) => {
  const username = req.query.username;
  // If username is taken
  if (await usersAPI.readUser(username)) {
    res.send(username + ' is already taken');
  } else {
    // If username is available
    const model = await usersAPI.createUser(
      username,
      req.query.first,
      req.query.last,
      req.query.email
    );

    res.send(model.dataValues.username + ' was created.');
  }
};

module.exports = { base, userGet, userPost };
