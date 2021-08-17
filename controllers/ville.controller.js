const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const villes = await models.Ville.findAll({
        attributes: [["id", "value"], ["nom_ville", "label"], "active"],
      });
      res.status(200).json({
        villes: villes,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
