let options = {};
options.tableName = 'Users'; 

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(options, 'firstName', {  // options object
      type: Sequelize.STRING(30),
      allowNull: false,
    })
    await queryInterface.addColumn(options, 'lastName', {  // options object
      type: Sequelize.STRING(30),
      allowNull: false,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(options, 'firstName') // options object
    await queryInterface.removeColumn(options, 'lastName')  // options object
  }
};
