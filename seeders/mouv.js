"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("mouvs", [
      {
        desc_mouv: "entrée en bras cassé",
      },
      {
        desc_mouv: "entrée en manuel",
      },
      {
        desc_mouv: "sortie en ouv.maint",
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
