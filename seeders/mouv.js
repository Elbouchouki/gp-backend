"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Mouvs", [
      {
        desc_mouv: "entrée en bras cassé",
        type: "Entrées",
      },
      {
        desc_mouv: "entrée en manuel",
        type: "Entrées",
      },
      {
        desc_mouv: "sortie en ouv.maint",
        type: "Sorties",
      },
      {
        desc_mouv: "sortie en manuel",
        type: "Sorties",
      },
      {
        desc_mouv: "sortie en bras cassé",
        type: "Sorties",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Mouvs");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
