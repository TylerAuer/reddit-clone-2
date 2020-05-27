'use strict';
module.exports = (sequelize, DataTypes) => {
  const content_type = sequelize.define('content_type', {
    name: DataTypes.STRING
  }, {});
  content_type.associate = function(models) {
    // associations can be defined here
  };
  return content_type;
};