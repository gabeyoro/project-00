'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      Group.belongsTo(models.User, {foreignKey:"organizerId"})
    }
  }
  Group.init({
    organizerId: { type: DataTypes.INTEGER, references:{modelName:"Users"} },
    name: DataTypes.STRING,
    about: DataTypes.TEXT,
    type: DataTypes.ENUM,
    private: DataTypes.BOOLEAN,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};
