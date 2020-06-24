const path = require('path');
const usersAPI = require('../api/users');

const getUserInfoByUsername = async (req, res) => {
  console.log('Looking up ' + req.query.username);
  const userInfo = await usersAPI.readUserByUsername(req.query.username);
  userInfo
    ? res.send(userInfo) // defaults to status(200)
    : res.status(404).send(req.query.username + 'does not exist');
};

// TODO: Be more explicit about what the function does
const makeNewUser = async (req, res) => {
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

const updateUserAccountInfo = async (req, res) => {
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

const deleteUser = async (req, res) => {
  console.log(`Trying to delete ${req.query.username}`);
  const userDeleteDB = await usersAPI.deleteUser(req.query.username);
  res.send(`${req.query.username}'s account was delete`);
};

module.exports = {
  getUserInfoByUsername,
  makeNewUser,
  updateUserAccountInfo,
  deleteUser,
};
