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

const getUserByID = (userID) => {
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
        id: userID,
      },
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
};

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

const deleteUser = (userID) => {
  // removes user
  models.user.destroy({
    where: {
      id: userID,
    },
  });
  // removes user's posts and comments
  models.content.destroy({
    where: {
      creator: userID,
    },
  });
};

const getPostCommentAndHeartDataForUser = async (userID) => {
  const userInfo = await models.user.findOne({
    where: {
      id: userID,
    },
  });

  const postsRaw = await models.content.findAll({
    where: {
      creator: userID,
      content_type: 4,
    },
  });

  const postsClean = postsRaw.map((post) => {
    return {
      id: post.id,
      post_title: post.metadata.post_title,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
  });

  const commentCount = await models.content.count({
    where: {
      creator: userID,
      content_type: 5,
    },
  });

  const heartCount = await models.content.count({
    where: {
      creator: userID,
      content_type: 7,
    },
  });

  return {
    user_info: {
      username: userInfo.username,
      date_joined: userInfo.date_joined,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      email_address: userInfo.email_address,
    },
    posts: postsClean,
    comment_count: commentCount,
    heart_count: heartCount,
  };
};

module.exports = {
  createUser,
  getUserByID,
  getUserByUsername,
  getPostCommentAndHeartDataForUser,
};
