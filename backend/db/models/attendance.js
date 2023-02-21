'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    static associate(models) {
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
