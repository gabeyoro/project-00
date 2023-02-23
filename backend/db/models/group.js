'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      Group.belongsTo(models.User, {foreignKey:"organizerId", targetKey:"id"});
      Group.hasMany(models.Venue, {targetKey:"groupId"});
      Group.hasMany(models.GroupImage, {targetKey:"groupId"});
      Group.hasMany(models.Membership, {targetKey:"groupId"});
      Group.hasMany(models.Event, {targetKey:"groupId"});
    }
  }
  Group.init({
    organizerId: { 
      type: DataTypes.INTEGER, 
      references:{
        model:"User",
        key:"id"
      } 
    },
    name: DataTypes.STRING,
    about: DataTypes.TEXT,
    type: { 
      type: DataTypes.ENUM,
      values:['a', 'b', 'c']
    },
    private: DataTypes.BOOLEAN,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};
