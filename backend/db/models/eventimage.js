'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventImage extends Model {
    static associate(models) {
      EventImage.belongsTo(models.Event, {foreignKey:"eventId"})
    }
  }
  EventImage.init({
    eventId: { type: DataTypes.INTEGER, references:{model:"EventImage"} },
    url: DataTypes.STRING,
    preivew: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'EventImage',
  });
  return EventImage;
};
