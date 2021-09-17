"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Articles", [
      {
        num_art: "10100",
        desc_art: "ticket horaire",
      },
      {
        num_art: "00104",
        desc_art: "ticket illisible",
      },
      {
        num_art: "00107",
        desc_art: "ticket perdu",
      },
      {
        num_art: "30001",
        desc_art: "retour ticket",
      },
      {
        num_art: "30200",
        desc_art: "sortie abonné",
      },
      {
        num_art: "00200",
        desc_art: "nouveau abonné",
      },
      {
        num_art: "00201",
        desc_art: "recharge abonné",
      },
      {
        num_art: "00202",
        desc_art: "recharge abonné oncf",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Articles");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
