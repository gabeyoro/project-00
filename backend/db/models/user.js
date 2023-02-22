'use strict';
const { Model, Validator } = require('sequelize');
const bcrypt = require('bcryptjs'); 

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject(){
      const {id, firstName, lastName, email, username} = this;
      return {id, firstName, lastName, email, username};
    }
    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }
    static associate(models){
      User.hasMany(models.Attendance, {foreignKey:"userId"});
      User.hasMany(models.Membership, {foreignKey:"userId"});
      User.hasMany(models.Group, {foreignKey:"organizerId"});
    }
    static getCurrentUserById(id) {
      return User.scope("currentUser").findByPk(id);
    }
    static async login({ credential, password }) {
      const { Op } = require('sequelize');
      const user = await User.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential
          }
        }
      });
      if (user && user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.id);
      }
    }
    static async signup({ lastName, firstName, username, email, password }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        username,
        firstName, 
        lastName, 
        email,
        hashedPassword
      });
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.init({
    username: { 
      type: DataTypes.STRING,
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
    firstName: { 
      type: DataTypes.STRING,
      allowNull: false, 
      },
    lastName: { 
      type: DataTypes.STRING,
      allowNull: false, 
      },
    email: { 
      type: DataTypes.STRING,
      allowNull: false, 
      unique:{
        msg:"User with that email already exists",
      },
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
    defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
        }
      },
    scopes: {
        currentUser: {
          attributes: {exclude:["hashedPassword"]}
        },
        loginUser:{
          attributes: {}
        }
      }
  });
  return User;
};
