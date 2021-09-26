"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Bilans", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },

      caisse: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      caisser: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      poste: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      montant: {
        allowNull: true,
        type: Sequelize.DOUBLE,
      },
      type: {
        allowNull: true,
        type: Sequelize.TEXT("tiny"),
      },
      ville_id: {
        type: Sequelize.INTEGER,
        references: { model: "Villes", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      date_d: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      date_f: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Bilans");
  },
};
