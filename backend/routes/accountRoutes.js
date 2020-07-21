const accountsAPI = require('../api/accounts');

const signIn = async (req, res) => {
  const userInfo = await accountsAPI.getUserByUsername(req.body.username);
  if (userInfo) {
    // User found in DB
    console.log(
      `ACCOUNT: ${userInfo.username} signed in [ID: ${req.params.userID}]`
    );
    res.send(userInfo); // defaults to status(200)
  } else {
    res.status(404).send(req.body.username + 'does not exist');
  }
};

// const getUserByID = async (req, res) => {

// const getUserByUsername = async (req, res) => {
//   const userInfo = await accountsAPI.getUserByUsername(req.params.username);
//   console.log(
//     `USER by USERNAME: Looked up ${userInfo.username} [ID: ${req.params.userID}]`
//   );
//   userInfo
//     ? res.send(userInfo) // defaults to status(200)
//     : res.status(404).send(req.query.username + 'does not exist');
// };

// const makeNewUser = async (req, res) => {
//   console.log(`USER: Creating new account with username: ${req.body.username}`);
//   const username = req.body.username;
//   // If username is taken
//   if (await accountsAPI.readUserByUsername(username)) {
//     console.log('Failed to create ' + req.body.username);
//     res.send(username + ' is already taken');
//   } else {
//     // If username is available
//     const model = await accountsAPI.createUser(
//       username,
//       req.body.first_name,
//       req.body.last_name,
//       req.body.email_address
//     );
//     console.log('Successfully created ' + req.body.username);

//     res.send(model.dataValues.username + ' was created.');
//   }
// };

// const updateUserAccountInfo = async (req, res) => {
//   console.log(`USER: Updating account info for ${req.query.orig_username}`);
//   const userUpdateDBResponse = await accountsAPI.updateUser(
//     req.query.orig_username,
//     req.query.username,
//     req.query.first,
//     req.query.last,
//     req.query.email
//   );
//   console.log(userUpdateDBResponse);
//   res.send('User info was updated');
// };

// const deleteUser = async (req, res) => {
//   console.log(
//     `USER: Deleting ${req.query.username}'s account and associated posts and comments'`
//   );
//   const userDeleteDB = await accountsAPI.deleteUser(req.query.id);
//   res.send(`${req.query.username}'s account was delete`);
// };

module.exports = {
  signIn,
};
