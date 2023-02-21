"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
options.tableName = "Events";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(options, "type", {
      type: Sequelize.ENUM("a", "b", "c"),
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(options, "type");
  },
};
