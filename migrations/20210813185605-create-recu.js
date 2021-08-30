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
        type: Sequelize.INTEGER,
        references: { model: "Articles", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      ville_id: {
        type: Sequelize.INTEGER,
        references: { model: "Villes", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
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
