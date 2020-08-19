const accountsAPI = require('../api/accounts');

const signIn = async (req, res) => {
  // If this function gets called, authentication was successful.
  const user = { ...req.user.dataValues };
  delete user.password;
  res.send(user);
};

const signUp = async (req, res, next) => {
  const username = req.body.username;
  // If username is taken
  if (await accountsAPI.getUserByUsername(username)) {
    console.log(
      `ACCOUNT: Failed to create new account. ${username} already taken`
    );
    res
      .status(409)
      .send(
        `${username} is already taken. Please select a new username and resubmit.`
      );
  } else {
    // If username is available

    // Create user
    await accountsAPI.createUser(req.body);
    console.log(`ACCOUNT: Created account for ${username}`);

    next();
  }
};

const signOut = (req, res) => {
  console.log(`ACCOUNT: A user signed out.`);
  req.logout();
  req.send('Signed you out.');
};

const updateAccount = async (req, res) => {
  console.log(`ACCOUNT: Updating ${req.body.username} [id: ${req.body.id}]`);
  const userUpdateDBResponse = await accountsAPI.updateAccount(req.body);
  console.log(userUpdateDBResponse);
  res.send('User info was updated');
};

const deleteAccount = async (req, res) => {
  accountsAPI.deleteAccount(req.body.id);
  console.log(
    `ACCOUNT: Deleting account with ID: ${req.body.id} and ending session.`
  );
  req.logout();
  res.send('Account deleted.');
};

module.exports = {
  signIn,
  signUp,
  signOut,
  updateAccount,
  deleteAccount,
};
