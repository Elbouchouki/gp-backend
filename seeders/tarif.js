"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Tarifs", [
      {
        value: 0,
        label: "0 Dh",
        type: "normal",
      },
      {
        value: 5,
        label: "5 Dh",
        type: "normal",
      },
      {
        value: 7,
        label: "7 Dh",
        type: "normal",
      },
      {
        value: 12,
        label: "12 Dh",
        type: "normal",
      },
      {
        value: 15,
        label: "15 Dh",
        type: "normal",
      },
      {
        value: 20,
        label: "20 Dh",
        type: "normal",
      },
      {
        value: 25,
        label: "25 Dh",
        type: "normal",
      },
      {
        value: -1,
        label: "Autres",
        type: "normal",
      },
      {
        value: 120,
        label: "Nouveau Abonné",
        type: "abonné",
      },
      {
        value: 220,
        label: "Recharge Abonné normal",
        type: "abonné",
      },
      {
        value: 100,
        label: "Recharge Abonné ONCF",
        type: "abonné",
      },
      {
        value: -1,
        label: "Autres",
        type: "abonné",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tarifs");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
