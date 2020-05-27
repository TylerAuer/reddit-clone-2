'use strict';
module.exports = (sequelize, DataTypes) => {
  const content = sequelize.define('content', {
    content_type: DataTypes.INTEGER,
    creator: DataTypes.INTEGER,
    metadata: DataTypes.JSON
  }, {});
  content.associate = function(models) {
    // associations can be defined here
  };
  return content;
};