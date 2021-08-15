"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Recus", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      valeur: {
        allowNull: true,
        type: Sequelize.DOUBLE,
      },
      caisse: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      article_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      ville_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      societe: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      participant: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      date_paiment: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      date_e: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      date_s: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      etats: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Recus");
  },
};
