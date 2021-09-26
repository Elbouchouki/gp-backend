"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bilan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bilan.belongsTo(models.Ville, { foreignKey: "ville_id" });
    }
  }
  Bilan.init(
    {
      montant: DataTypes.DOUBLE,
      caisse: DataTypes.INTEGER,
      caisser: DataTypes.STRING,
      type: DataTypes.TEXT("tiny"),
      ville_id: DataTypes.INTEGER,
      poste: DataTypes.INTEGER,
      date_d: DataTypes.DATE,
      date_f: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Bilan",
    }
  );
  return Bilan;
};
