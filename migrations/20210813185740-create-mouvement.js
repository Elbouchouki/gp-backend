"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Mouvements", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      date_m: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      desc_m: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      mouvement_id: {
        type: Sequelize.INTEGER,
        references: { model: "Mouvs", key: "id" },
        allowNull: false,
      },
      ville_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Mouvements");
  },
};
