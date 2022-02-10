"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, { foreignKey: "role_id" });
      // User.hasMany(models.Ticket, { foreignKey: "abonne_id" });
      // User.hasMany(models.Ticket, { foreignKey: "caissier_id" });
    }
  }
  User.init(
    {
      username: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      cin: DataTypes.STRING,
      nom: DataTypes.STRING,
      prenom: DataTypes.STRING,
      phone: DataTypes.STRING,
      mail: DataTypes.STRING,
      password: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
