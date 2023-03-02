'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}
const seeders = [
  {userId:4, groupId:1, status:"co-host"},
  {userId:7, groupId:2, status:"pending"},
  {userId:9, groupId:1, status:"co-host"},
  {userId:7, groupId:1, status:"pending"},
  {userId:1, groupId:2, status:"pending"},
  {userId:1, groupId:1, status:"co-host"},
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Memberships';
    return queryInterface.bulkInsert(options, seeders, {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Memberships';
    return queryInterface.bulkDelete(options, null, {});
  }
};
