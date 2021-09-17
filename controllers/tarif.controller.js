const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    const type = req.params.type;
    try {
      const tarifs = await models.Tarif.findAll({
        where: {
          type: { [Op.eq]: type },
        },
      });
      res.status(200).json({ result: tarifs });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
