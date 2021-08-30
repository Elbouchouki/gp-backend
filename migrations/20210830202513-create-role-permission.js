"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RolePermissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      RoleId: {
        type: Sequelize.INTEGER,
        references: { model: "Roles", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      PermissionId: {
        type: Sequelize.INTEGER,
        references: { model: "Permissions", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("RolePermissions");
  },
};
