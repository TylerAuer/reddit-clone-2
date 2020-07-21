'use strict';
module.exports = (sequelize, DataTypes) => {
  const content = sequelize.define(
    'content',
    {
      content_type: DataTypes.INTEGER,
      creator: DataTypes.INTEGER,
      content_parent: DataTypes.INTEGER,
      metadata: DataTypes.JSON,
    },
    {}
  );
  content.associate = function (models) {
    models.content.belongsTo(models.user, {
      foreignKey: 'creator',
    });
    models.content.belongsTo(models.content, {
      foreignKey: 'content_parent',
    });
    models.content.hasMany(models.content, {
      foreignKey: 'content_parent',
      sourceKey: 'id',
    });
    models.content.belongsTo(models.content, {
      foreignKey: 'id',
    });
  };
  return content;
};
