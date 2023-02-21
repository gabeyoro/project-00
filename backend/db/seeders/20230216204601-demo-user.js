'use strict';
const bcrypt = require("bcryptjs");
const { faker } = require('@faker-js/faker');

const createUser = (number) => {
  let i = 0;
  let output = [];
  let current = [];
  do{ 
      let firstNameF = faker.name.firstName();
      let lastNameF = faker.name.lastName();
      let emailF =  faker.internet.email();
      let usernameF = faker.internet.userName();
      let passwordF = faker.internet.password(10);
    output.push({firstName: firstNameF, lastName: lastNameF, email: emailF, username: usernameF, hashedPassword: bcrypt.hashSync(passwordF)});
    i++;
  } while (i<number)
  return output;
}

const seedUsers = createUser(100)

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, seedUsers, {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
