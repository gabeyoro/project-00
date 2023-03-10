"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    static associate(models) {
      Attendance.belongsTo(models.Event, { foreignKey: "eventId" });
      Attendance.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Attendance.init(
    {
      status: {
        type: DataTypes.ENUM, 
        values:['a', 'b', 'c']
      },
      eventId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Event",
        },
      },
      userId: { 
      type: DataTypes.INTEGER, 
      references:{
        model:"User",
      }
    }, 
    },
    {
      sequelize,
      modelName: "Attendance",
    }
  );
  return Attendance;
};
