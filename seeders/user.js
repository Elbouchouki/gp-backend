"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        username: "admin",
        cin: "admincin",
        nom: "adminnom",
        prenom: "adminprenom",
        phone: "adminphone",
        mail: "admin@mail.com",
        password: "adminpass",
        role_id: 1,
      },
      {
        username: "financer",
        cin: "financercin",
        nom: "financernom",
        prenom: "financerprenom",
        phone: "financerphone",
        mail: "financer@mail.com",
        password: "financerpass",
        role_id: 2,
      },
      {
        username: "normal",
        cin: "normalcin",
        nom: "normalnom",
        prenom: "normalprenom",
        phone: "normalphone",
        mail: "normal@mail.com",
        password: "normalpass",
        role_id: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
