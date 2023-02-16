'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  }
  User.init({
    username: { 
      type: DataTypes.STRING(30),
      unique: true, 
      allowNull: false, 
    },
    email: { 
      type: DataTypes.STRING,
      unique: true, 
      allowNull: false, 
    },
    hashedPassword: { 
      type: DataTypes.STRING.BINARY,
      allowNull: false, 
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
