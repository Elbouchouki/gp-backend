"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
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
      {
        username: "Lahmouz",
        cin: "DA2671",
        nom: "Lahmouz",
        prenom: "Mohammed",
        phone: "",
        mail: "lahmouz@oncf.ma",
        password: "Bouchra72",
        role_id: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
