const usersAPI = require('../api/users');

const getUserByID = async (req, res) => {
  const userInfo = await usersAPI.getUserByID(req.params.userID);
  console.log(
    `USER by ID: Looked up ${userInfo.username} [ID: ${req.params.userID}]`
  );
  userInfo
    ? res.send(userInfo) // defaults to status(200)
    : res.status(404).send(req.params.username + 'does not exist');
};

const getUserByUsername = async (req, res) => {
  const userInfo = await usersAPI.getUserByUsername(req.params.username);
  console.log(
    `USER by USERNAME: Looked up ${userInfo.username} [ID: ${req.params.userID}]`
  );
  userInfo
    ? res.send(userInfo) // defaults to status(200)
    : res.status(404).send(req.query.username + 'does not exist');
};

const makeNewUser = async (req, res) => {
  console.log(`USER: Creating new account with username: ${req.body.username}`);
  const username = req.body.username;
  // If username is taken
  if (await usersAPI.readUserByUsername(username)) {
    console.log('Failed to create ' + req.body.username);
    res.send(username + ' is already taken');
  } else {
    // If username is available
    const model = await usersAPI.createUser(
      username,
      req.body.first_name,
      req.body.last_name,
      req.body.email_address
    );
    console.log('Successfully created ' + req.body.username);

    res.send(model.dataValues.username + ' was created.');
  }
};

// REMOVE
// const updateUserAccountInfo = async (req, res) => {
//   console.log(`USER: Updating account info for ${req.query.orig_username}`);
//   const userUpdateDBResponse = await usersAPI.updateUser(
//     req.query.orig_username,
//     req.query.username,
//     req.query.first,
//     req.query.last,
//     req.query.email
//   );
//   console.log(userUpdateDBResponse);
//   res.send('User info was updated');
// };

// REMOVE
// const deleteUser = async (req, res) => {
//   console.log(
//     `USER: Deleting ${req.query.username}'s account and associated posts and comments'`
//   );
//   const userDeleteDB = await usersAPI.deleteUser(req.query.id);
//   res.send(`${req.query.username}'s account was delete`);
// };

const getPostCommentAndHeartDataForUser = async (req, res) => {
  console.log('USER: List of Posts, Comments, and Hearts');
  const postCommentAndHeartData = await usersAPI.getPostCommentAndHeartDataForUser(
    req.params.userID
  );
  res.send(postCommentAndHeartData);
};

module.exports = {
  getUserByID,
  getUserByUsername,
  makeNewUser,
  getPostCommentAndHeartDataForUser,
};
