const { Sequelize, DataTypes } = require('sequelize');
const content = require('../models/content');
// Connect to postgres DB
const sequelize = new Sequelize('reddit', 'tylerauer', null, {
  host: 'localhost',
  dialect: 'postgres',
});

const createNewPost = (userID, metadata) => {
  return content(sequelize, DataTypes)
    .create({
      creater: userID,
      metadata: metadata,
    })
    .catch((error) => console.error(error));
};

module.exports = { createNewPost };
