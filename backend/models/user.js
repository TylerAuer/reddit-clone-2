'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_joined: DataTypes.INTEGER,
    email_address: DataTypes.STRING,
  });

  user.associate = function (models) {
    // associations here
  };
  return user;
};
