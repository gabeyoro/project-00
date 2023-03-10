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
    eventId: { 
      type: DataTypes.INTEGER, 
      references:{
        model: "Event"
      } 
    },
    url: DataTypes.STRING,
    preview: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'EventImage',
  });
  return EventImage;
};
