"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ville extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ville.hasMany(models.Recu, { foreignKey: "ville_id" });
      Ville.hasMany(models.Mouvement, { foreignKey: "ville_id" });
    }
  }
  Ville.init(
    {
      nom_ville: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Ville",
    }
  );
  return Ville;
};
