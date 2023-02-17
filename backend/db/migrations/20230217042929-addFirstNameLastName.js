'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'firstName', {  // options object
      type: Sequelize.STRING(30),
      allowNull: false,
    })
    await queryInterface.addColumn('Users', 'lastName', {  // options object
      type: Sequelize.STRING(30),
      allowNull: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'firstName') // options object
    await queryInterface.removeColumn('Users', 'lastName')  // options object
  }
};
