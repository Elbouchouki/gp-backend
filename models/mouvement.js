"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mouvement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mouvement.belongsTo(models.Mouv, { foreignKey: "mouvement_id" });
      Mouvement.belongsTo(models.Ville, { foreignKey: "ville_id" });
    }
  }
  Mouvement.init(
    {
      date_m: DataTypes.DATE,
      desc_m: DataTypes.STRING,
      mouvement_id: DataTypes.INTEGER,
      ville_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Mouvement",
    }
  );
  return Mouvement;
};
