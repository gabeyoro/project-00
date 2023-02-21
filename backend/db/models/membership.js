'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    static associate(models) {
      Membership.belongsTo(models.User, { foreignKey:"userId" })
    }
  }
  Membership.init({
    userId: { type: DataTypes.STRING, references:{model:User} },
    groupID: DataTypes.STRING,
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};
