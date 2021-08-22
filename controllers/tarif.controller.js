const models = require("../models");
const { Sequelize } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const tarifs = await models.Tarif.findAll({});
      res.status(200).json({ result: tarifs });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
