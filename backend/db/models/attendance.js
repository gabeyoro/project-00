'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    static associate(models) {
      Attendance.belongsTo(models.Event, {foreignKey:"eventId"});
      Attendance.belongsTo(models.User, {foreignKey:"userId"});
    }
  }
  Attendance.init({
    status: DataTypes.ENUM,
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attendance',
  });
  return Attendance;
};
