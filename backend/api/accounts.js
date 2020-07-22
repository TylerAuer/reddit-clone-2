const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const models = require('../models');

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

// const getUserByID = (userID) => {
//   return models.user
//     .findOne({
//       attributes: [
//         'id',
//         'username',
//         'first_name',
//         'last_name',
//         'date_joined',
//         'email_address',
//       ],
//       where: {
//         id: userID,
//       },
//     })
//     .catch((error) => {
//       console.log('Error: ', error);
//     });
// };

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

// const updateUser = (
//   orig_username,
//   username,
//   first_name,
//   last_name,
//   email_address
// ) => {
//   return models.user.update(
//     {
//       username: username,
//       first_name: first_name,
//       last_name: last_name,
//       email_address: email_address,
//     },
//     {
//       where: {
//         username: orig_username,
//       },
//     }
//   );
// };

// const deleteUser = (userID) => {
//   // removes user
//   models.user.destroy({
//     where: {
//       id: userID,
//     },
//   });
//   // removes user's posts and comments
//   models.content.destroy({
//     where: {
//       creator: userID,
//     },
//   });
// };

module.exports = {
  getUserByUsername,
  createUser,
};
