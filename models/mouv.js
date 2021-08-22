"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mouv extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mouv.hasMany(models.Mouvement, { foreignKey: "mouvement_id" });
    }
  }
  Mouv.init(
    {
      desc_mouv: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Mouv",
    }
  );
  return Mouv;
};
