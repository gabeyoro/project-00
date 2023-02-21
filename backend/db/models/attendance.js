'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    static associate(models) {
      /* Attendance.belongsTo(models.Event, {foreignKey:"eventId"});
      Attendance.belongsTo(models.User, {foreignKey:"userId"}); */
    }
  }
  Attendance.init({
    status: { 
      type: DataTypes.STRING,
    },
    /* eventId: { 
      type: DataTypes.INTEGER, 
    }, 
    userId: { 
      type: DataTypes.INTEGER, 
    }, 
  }, { */
    sequelize,
    modelName: 'Attendance',
  });
  return Attendance;
};
