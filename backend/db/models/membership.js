'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    static associate(models) {
      Membership.belongsTo(models.User, { foreignKey:"userId" })
      Membership.belongsTo(models.Group, { foreignKey:"groupId" })
    }
  }
  Membership.init({
    userId: { 
    type: DataTypes.INTEGER, 
      references:{
        model:User
      } 
    },
    groupId: { 
      type: DataTypes.INTEGER, 
      references: {
        model:Group
      } 
    },
    status: { 
      type: DataTypes.ENUM,
      values:['co-host', 'pending']
    }
  }, {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};
