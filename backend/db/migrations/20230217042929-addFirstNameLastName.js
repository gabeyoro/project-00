let options = {};
options.tableName = 'Users'; 

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(options, 'firstName', {  // options object
      type: Sequelize.STRING(30),
    })
    await queryInterface.addColumn(options, 'lastName', {  // options object
      type: Sequelize.STRING(30),
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(options, 'firstName') // options object
    await queryInterface.removeColumn(options, 'lastName')  // options object
  }
};
