'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupImage extends Model {
    static associate(models) {
/*       GroupImage.belongsTo(models.Group, {foreignKey:"groupId"}) */
    }
  }
  GroupImage.init({
    /* groupId: { 
      type: DataTypes.INTEGER, 
      references: { 
        model: "Group"
      } 
    }, */
    url: DataTypes.STRING,
    preview: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'GroupImage',
  });
  return GroupImage;
};
