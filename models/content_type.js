'use strict';
module.exports = (sequelize, DataTypes) => {
  const content_type = sequelize.define(
    'content_type',
    {
      name: DataTypes.STRING,
    },
    {}
  );
  content_type.associate = function (models) {
    // models.content_type.hasMany(models.content);
  };
  return content_type;
};
