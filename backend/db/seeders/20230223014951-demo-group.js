'use strict';
const {User} = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}
const seeders = [
  {organizerId:fk, name:"Something Cool", about:"Super cool stuff here.", 
    type:"a", private:true, city:"Los Angeles", state:"CA"},
  {organizerId:fk, name:"Something Cooler", about:"Super cooler stuff here.", 
    type:"c", private:false, city:"Brooklyn", state:"NY"}
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Groups';
    return queryInterface.bulkInsert(options, seeders, {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Groups';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {where: { organizerId: { [Op.gt]:0 }}}, {});
  }
};
