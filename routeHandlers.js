const path = require('path');
const usersAPI = require('./api/users');

const base = (req, res) =>
  res.sendFile(path.join(__dirname + '/app/public/index.html'));

const userGet = async (req, res) => {
  console.log('Looking up ' + req.query.username);
  const userInfo = await usersAPI.readUser(req.query.username);
  userInfo
    ? res.send(userInfo) // defaults to status(200)
    : res.status(404).send(req.query.username + 'does not exist');
};

// TODO: Be more explicit about what the function does
const userPost = async (req, res) => {
  console.log('Trying to create ' + req.query.username);
  const username = req.query.username;
  // If username is taken
  if (await usersAPI.readUser(username)) {
    console.log('Failed to create ' + req.query.username);
    res.send(username + ' is already taken');
  } else {
    console.log('Successfully created ' + req.query.username);
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

const updateUser = async (req, res) => {
  const userUpdateDBResponse = await usersAPI.updateUser(
    req.query.orig_username,
    req.query.username,
    req.query.first,
    req.query.last,
    req.query.email
  );
  console.log(userUpdateDBResponse);
  res.send('User info was updated');
};

module.exports = { base, userGet, userPost, updateUser };
