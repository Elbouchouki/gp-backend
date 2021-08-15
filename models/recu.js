"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recu.belongsTo(models.Ville, { foreignKey: "ville_id" });
      Recu.belongsTo(models.Article, { foreignKey: "article_id" });
    }
  }
  Recu.init(
    {
      valeur: DataTypes.DOUBLE,
      caisse: DataTypes.INTEGER,
      article_id: DataTypes.INTEGER,
      ville_id: DataTypes.INTEGER,
      societe: DataTypes.STRING,
      participant: DataTypes.STRING,
      date_paiment: DataTypes.DATE,
      date_e: DataTypes.DATE,
      date_s: DataTypes.DATE,
      etats: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Recu",
    }
  );
  return Recu;
};
