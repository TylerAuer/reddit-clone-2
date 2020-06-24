// TODO: Will want to refactor requires and sequelize so they aren't repeated
// in the APIs for Content Type and Content
const { Sequelize, DataTypes } = require('sequelize');
const user = require('../models/user');
// Connect to postgres DB
const sequelize = new Sequelize('reddit', 'tylerauer', null, {
  host: 'localhost',
  dialect: 'postgres',
});

// CREATE new user in DB
const createUser = (username, first_name, last_name, email_address) => {
  return user(sequelize, DataTypes)
    .create({
      username: username,
      first_name: first_name,
      last_name: last_name,
      date_joined: Math.round(Date.now() / 1000), // rounded to the second
      email_address: email_address,
    })
    .catch((error) => console.log('Error on Create User', error));
};

// READ user in from Username
const readUserByUsername = (username) => {
  return user(sequelize, DataTypes)
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

// READ user by ID
const readUserByID = (id) => {
  return user(sequelize, DataTypes)
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

// UPDATE user in DB
const updateUser = (
  orig_username,
  username,
  first_name,
  last_name,
  email_address
) => {
  return user(sequelize, DataTypes).update(
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

// DELETE user in DB
const deleteUser = (username) => {
  console.log(`Deleting ${username} from the database`);
  return user(sequelize, DataTypes).destroy({
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
