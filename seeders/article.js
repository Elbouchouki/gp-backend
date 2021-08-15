"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("articles", [
      {
        num_art: "10100",
        desc_art: "ticket normal",
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
        desc_art: "entrée abonné",
      },
      {
        num_art: "00200",
        desc_art: "recharge abonné",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("articles");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
