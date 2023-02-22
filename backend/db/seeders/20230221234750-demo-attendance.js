'use strict';
const { faker } = require('@faker-js/faker');

const createAttendance = (number) => {
  let i = 0;
  let output = [];
  do{ 
      let eventIdF = faker.datatype.number({ max:25 });
      let userIdF = faker.datatype.number({ max:100 });
      let statusF = faker.helpers.arrayElement(['a', 'b', 'c']);
    output.push({eventId: eventIdF, userId: userIdF, status: statusF});
    i++;
  } while (i<number);
  return output;
}

const seedAttendance = createAttendance(50);

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* options.tableName = 'Attendances';
    return queryInterface.bulkInsert(options, seedAttendance, {}); */
  },

  down: async (queryInterface, Sequelize) => {
    /* options.tableName = 'Attendances';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {}, {}); */
  }
};
