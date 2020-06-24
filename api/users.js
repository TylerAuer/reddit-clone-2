const { Sequelize } = require('sequelize');
const models = require('../models');

const createUser = (username, first_name, last_name, email_address) => {
  return models.user
    .create({
      username: username,
      first_name: first_name,
      last_name: last_name,
      date_joined: Math.round(Date.now() / 1000), // rounded to the second
      email_address: email_address,
    })
    .catch((error) => console.log('Error on Create User', error));
};

const readUserByUsername = (username) => {
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
          // QUESTION: How this is making the value lowercase is a mystery to me
          // A (very) quick look at the sequelize docs did not answer my question
          [Sequelize.Op.iLike]: username, // iLike makes case-insensitive
        },
      },
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
};

const readUserByID = (id) => {
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
        username: id,
      },
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
};

const updateUser = (
  orig_username,
  username,
  first_name,
  last_name,
  email_address
) => {
  return models.user.update(
    {
      username: username,
      first_name: first_name,
      last_name: last_name,
      email_address: email_address,
    },
    {
      where: {
        username: orig_username,
      },
    }
  );
};

const deleteUser = (username) => {
  return models.user.destroy({
    where: {
      username: username,
    },
  });
};

module.exports = {
  createUser,
  readUserByUsername,
  readUserByID,
  updateUser,
  deleteUser,
};
