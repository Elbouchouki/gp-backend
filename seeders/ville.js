"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("villes", [
      {
        nom_ville: "marrakech",
        active: true,
      },
      {
        nom_ville: "casablanca",
        active: true,
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
    return queryInterface.bulkDelete("villes");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
