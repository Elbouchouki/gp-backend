"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tarifs", [
      {
        value: 0,
        label: "0 Dh",
      },
      {
        value: 5,
        label: "5 Dh",
      },
      {
        value: 7,
        label: "7 Dh",
      },
      {
        value: 12,
        label: "12 Dh",
      },
      {
        value: 15,
        label: "15 Dh",
      },
      {
        value: 20,
        label: "20 Dh",
      },
      {
        value: 25,
        label: "25 Dh",
      },
      {
        value: -1,
        label: "Autres",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tarifs");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};