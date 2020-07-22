const accountsAPI = require('../api/accounts');

const signIn = async (req, res) => {
  const resultOfSignIn = await accountsAPI.signUserIn(req.body);
  // Unsuccessful sign in
  if (resultOfSignIn.data === null) {
    res.status(401).send(resultOfSignIn);
  } else {
    res.send(resultOfSignIn);
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

const signOut = (req, res) => {
  console.log(`ACCOUNT: A user signed out.`);
  req.logout();
};

const updateAccount = async (req, res) => {
  console.log(`ACCOUNT: Updating ${req.body.username} [id: ${req.body.id}]`);
  const userUpdateDBResponse = await accountsAPI.updateAccount(req.body);
  console.log(userUpdateDBResponse);
  res.send('User info was updated');
};

// const deleteAccount = async (req, res) => {
//   req.logout();
// };

module.exports = {
  signIn,
  signUp,
  signOut,
  updateAccount,
  // deleteAccount,
};
