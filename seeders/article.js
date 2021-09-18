"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Articles", [
      {
        num_art: "10100",
        desc_art: "ticket horaire",
        type: "normal",
      },
      {
        num_art: "00104",
        desc_art: "ticket illisible",
        type: "normal",
      },
      {
        num_art: "00107",
        desc_art: "ticket perdu",
        type: "normal",
      },
      {
        num_art: "30001",
        desc_art: "retour ticket",
        type: "sortie",
      },
      {
        num_art: "30200",
        desc_art: "sortie abonné",
        type: "sortie",
      },
      {
        num_art: "00200",
        desc_art: "nouveau abonné",
        type: "abonné",
      },
      {
        num_art: "00201",
        desc_art: "recharge abonné",
        type: "abonné",
      },
      {
        num_art: "00202",
        desc_art: "recharge abonné oncf",
        type: "abonné",
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
