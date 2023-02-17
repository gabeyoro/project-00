'use strict';
let options = {};
options.tableName = 'Users'; 

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'firstName', {  // options object
      type: Sequelize.STRING(30),
    })
    await queryInterface.addColumn('Users', 'lastName', {  // options object
      type: Sequelize.STRING(30),
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'firstName') // options object
    await queryInterface.removeColumn('Users', 'lastName')  // options object
  }
};
