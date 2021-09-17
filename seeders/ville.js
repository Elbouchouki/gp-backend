"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Villes", [
      {
        nom_ville: "marrakech",
        active: true,
      },
      {
        nom_ville: "casablanca",
        active: false,
      },
      {
        nom_ville: "mohmmadia",
        active: false,
      },
      {
        nom_ville: "fes",
        active: false,
      },
      {
        nom_ville: "sale",
        active: false,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Villes");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
