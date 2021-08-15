const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const villes_enabled = await models.Ville.findAll({
        where: {
          active: {
            [Op.eq]: true,
          },
        },
      });
      const villes_disabled = await models.Ville.findAll({
        where: {
          active: {
            [Op.eq]: false,
          },
        },
      });
      res.status(200).json({
        enabled: villes_enabled,
        disabled: villes_disabled,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
