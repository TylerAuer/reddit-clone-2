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

const signUp = async (req, res) => {
  const username = req.body.username;
  // If username is taken
  if (await accountsAPI.getUserByUsername(username)) {
    console.log(
      `ACCOUNT: Failed to create new account. ${username} already taken`
    );
    res.send(username + ' is already taken');
  } else {
    // If username is available

    // Create user
    await accountsAPI.createUser(req.body);
    console.log(`ACCOUNT: Created account for ${username}`);

    // Return account info for sign in
    const userInfo = await accountsAPI.getUserByUsername(username);
    console.log(
      `ACCOUNT: ${userInfo.username} signed in [ID: ${req.params.userID}]`
    );
    res.send(userInfo); // defaults to status(200)
  }
};

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
  signUp,
};
