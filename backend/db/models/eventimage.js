'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventImage extends Model {
    static associate(models) {
      EventImage.belongsTo(models.Group, {foreignKey:"groupId"})
    }
  }
  EventImage.init({
    eventId: { type: DataTypes.INTEGER, references:{modelName:"EventImages"} },
    url: DataTypes.STRING,
    preivew: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'EventImage',
  });
  return EventImage;
};
