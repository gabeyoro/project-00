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
      allowNull: false, 
      validate: {
        len: [4, 30],
        isNotEmail(value){
          if(Validator.isEmail(value)){
            throw new Error("Cannot be an email.");
          }
        }
      }
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        len:[3, 256],
        isEmail: true
      }
    },
    hashedPassword: { 
      type: DataTypes.STRING.BINARY,
      allowNull: false, 
      validate: {
        len: [60, 60]
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
