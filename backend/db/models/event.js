'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      /* Event.belongsTo(models.Venue, {foreignKey:"venueId"});
      Event.belongsTo(models.Group, {foreignKey:"groupId"}); */
      Event.hasMany(models.EventImage, {foreignKey:"eventId"});
      Event.hasMany(models.Attendance, {foreignKey:"eventId"});
    }
  }
  Event.init({
    /* venueId: { type: DataTypes.INTEGER, references:{model:"Venue", key:"id"} },
    groupId: { type: DataTypes.INTEGER, references:{model:"Group", key:"id"} }, */
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    /* type: { 
      type: DataTypes.ENUM, 
      values:['a', 'b', 'c']
    }, */
    capacity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
