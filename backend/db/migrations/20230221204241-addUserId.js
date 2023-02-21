'use strict';

let options = {}; 
if (process.env.NODE_ENV === 'production') { 
  options.schema = process.env.SCHEMA;  // define your schema in options object 
} 
options.tableName = "Attendances";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.addColumn(options, 'userId', {
      type: Sequelize.INTEGER, 
      references:{
        model:"Users"
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(options, 'userId')
  }
};
