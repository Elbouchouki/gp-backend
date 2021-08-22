"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("mouvs", [
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
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("mouvs");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
