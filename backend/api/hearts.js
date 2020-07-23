const { Sequelize } = require('sequelize');
const models = require('../models');

// Add heart
const addHeart = (userID, content_parent) => {
  return models.content
    .create({
      content_type: 7,
      creator: userID,
      content_parent: content_parent,
    })
    .catch((error) => console.error(error));
};

// Remove heart
const removeHeart = (userID, content_parent) => {
  return models.content
    .destroy({
      where: {
        content_type: 7,
        creator: userID,
        content_parent: content_parent,
      },
    })
    .catch((error) => console.error(error));
};

module.exports = { addHeart, removeHeart };
