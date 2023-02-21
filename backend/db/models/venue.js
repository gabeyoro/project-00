'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venue extends Model {
    static associate(models) {
      Venue.belongsTo(models.Group, {foreignKey:"groupId"});
      Venue.hasMany(models.Event, {foreignKey:"venueId"});
    }
  }
  Venue.init({
    groupId: { type: DataTypes.INTEGER, references:{model:"Group"} },
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Venue',
  });
  return Venue;
};
