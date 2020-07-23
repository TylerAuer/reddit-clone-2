const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const models = require('../models');

const getUserByUsername = (username) => {
  return models.user
    .findOne({
      attributes: [
        'id',
        'username',
        'first_name',
        'last_name',
        'date_joined',
        'email_address',
      ],
      where: {
        username: {
          [Sequelize.Op.iLike]: username, // iLike makes case-insensitive
        },
      },
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
};

const signUserIn = async (body) => {
  // See if user exists
  const userInfoFromDB = await models.user.findOne({
    attributes: [
      'id',
      'username',
      'password',
      'first_name',
      'last_name',
      'date_joined',
      'email_address',
    ],
    where: {
      username: {
        [Sequelize.Op.iLike]: body.username, // iLike makes case-insensitive
      },
    },
  });
  // No account with the given username
  if (!userInfoFromDB) {
    return {
      message: `${body.username} not found.`,
      data: null,
    };
  }

  // Check if password is correct
  const passwordIsValid = await bcrypt.compare(
    body.password,
    userInfoFromDB.password
  );

  if (passwordIsValid) {
    const userDataToReturn = userInfoFromDB.dataValues;
    delete userDataToReturn.password; // Don't hashed password to user
    return {
      message: `Signed in as ${userDataToReturn.username}`,
      data: userDataToReturn,
    };
  } else {
    return {
      message: `Incorrect password`,
      data: null,
    };
  }
};

const createUser = async (body) => {
  const passwordHash = await bcrypt.hash(body.password, 12);
  return models.user
    .create({
      username: body.username,
      password: passwordHash,
      first_name: body.first_name,
      last_name: body.last_name,
      date_joined: Math.round(Date.now() / 1000), // rounded to the second
      email_address: body.email_address,
    })
    .catch((error) => console.log('Error on Create User', error));
};

const updateAccount = (body) => {
  return models.user.update(
    {
      username: body.username,
      first_name: body.first_name,
      last_name: body.last_name,
      email_address: body.email_address,
    },
    {
      where: {
        id: body.id,
      },
    }
  );
};

const deleteAccount = (id) => {
  // removes user's posts and comments
  models.content.destroy({
    where: {
      creator: id,
    },
  });
  // removes user's account
  models.user.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getUserByUsername,
  createUser,
  signUserIn,
  updateAccount,
  deleteAccount,
};
