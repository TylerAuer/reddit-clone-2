// TODO: Will want to refactor requires and sequelize so they aren't repeated
// in the APIs for Content Type and Content
const { Sequelize, Model, DataTypes } = require('sequelize');
const user = require('../models/user');
// Connect to postgres DB
const sequelize = new Sequelize('reddit', 'tylerauer', null, {
  host: 'localhost',
  dialect: 'postgres',
});

// CREATE new user in DB
const addUser = (username, first_name, last_name, email_address) => {
  const newUser = user(sequelize, DataTypes).create({
    username: username,
    first_name: first_name,
    last_name: last_name,
    date_joined: Math.round(Date.now() / 1000), // rounded to the second
    email_address: email_address,
  });
  console.log('Added ', username, ' to the database!');
};

// READ user in DB - return object of user's info
// QUESTION: I have async functions in every step here. That can't be ideal
const readUser = async (username) => {
  const userData = await user(sequelize, DataTypes).findAll({
    attributes: [
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
  });

  return userData[0].dataValues;
};

// READ list of all users in DB
// readAllUsers()

// UPDATE user in DB
// updateUser()

// DELETE user in DB
// deleteUser()

module.exports = { addUser, readUser };
