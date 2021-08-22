const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const mouvements = await models.Mouvement.findAll({
        attributes: [
          [
            Sequelize.fn(
              "date_format",
              Sequelize.col("date_m"),
              "%d/%m/%Y %h:%i"
            ),
            "date_m",
          ],
          "desc_m",
        ],
        include: [models.Ville, models.Mouv],
      });
      res.status(200).json({ result: mouvements });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async filterDate(req, res) {
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const mouvements = await models.Mouvement.findAll({
        attributes: [
          [
            Sequelize.fn(
              "date_format",
              Sequelize.col("date_m"),
              "%d/%m/%Y %h:%i"
            ),
            "date_m",
          ],
          "desc_m",
        ],
        where: {
          date_m: { [Op.between]: [date_from, date_to] },
        },
        include: [models.Ville, models.Mouv],
      });
      res.status(200).json({ result: mouvements });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async sortVille(req, res) {
    const ville_id = req.params.ville_id;
    try {
      const mouvements = await models.Mouvement.findAll({
        attributes: [
          [
            Sequelize.fn(
              "date_format",
              Sequelize.col("date_m"),
              "%d/%m/%Y %h:%i"
            ),
            "date_m",
          ],
          "desc_m",
        ],
        where: {
          ville_id: { [Op.eq]: ville_id },
        },
        include: [models.Ville, models.Mouv],
      });
      res.status(200).json({ result: mouvements });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async sortVilleFilterDate(req, res) {
    const ville_id = req.params.ville_id;
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const mouvements = await models.Mouvement.findAll({
        attributes: [
          [
            Sequelize.fn(
              "date_format",
              Sequelize.col("date_m"),
              "%d/%m/%Y %h:%i"
            ),
            "date_m",
          ],
          "desc_m",
        ],
        where: {
          ville_id: { [Op.eq]: ville_id },
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
        include: [models.Ville, models.Mouv],
      });
      res.status(200).json({ result: mouvements });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
