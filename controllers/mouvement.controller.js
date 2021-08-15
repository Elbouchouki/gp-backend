const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    const mouvement_id = req.params.mouvement_id;
    try {
      const mouvements = await models.Mouvement.findAll({
        attributes: [
          "desc_m",
          [
            Sequelize.fn(
              "date_format",
              Sequelize.col("date_m"),
              "%d/%m/%Y %h:%i"
            ),
            "date_m",
          ],
        ],
        where: {
          mouvement_id: { [Op.eq]: mouvement_id },
        },
        include: [models.Ville],
      });
      res.status(200).json({ result: mouvements });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async filterDate(req, res) {
    const mouvement_id = req.params.mouvement_id;
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;

    try {
      const mouvements = await models.Mouvement.findAll({
        attributes: [
          "desc_m",
          [
            Sequelize.fn(
              "date_format",
              Sequelize.col("date_m"),
              "%d/%m/%Y %h:%i"
            ),
            "date_m",
          ],
        ],
        where: {
          mouvement_id: { [Op.eq]: mouvement_id },
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
        include: [models.Ville],
      });

      res.status(200).json({ result: mouvements });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async sortVille(req, res) {
    const mouvement_id = req.params.mouvement_id;
    const ville_id = req.params.ville_id;
    try {
      const mouvements = await models.Mouvement.findAll({
        attributes: [
          "desc_m",
          [
            Sequelize.fn(
              "date_format",
              Sequelize.col("date_m"),
              "%d/%m/%Y %h:%i"
            ),
            "date_m",
          ],
        ],
        where: {
          mouvement_id: { [Op.eq]: mouvement_id },
          ville_id: { [Op.eq]: ville_id },
        },
        include: [models.Ville],
      });

      res.status(200).json({ result: mouvements });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async sortVilleFilterDate(req, res) {
    const mouvement_id = req.params.mouvement_id;
    const ville_id = req.params.ville_id;
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const mouvements = await models.Mouvement.findAll({
        attributes: [
          "desc_m",
          [
            Sequelize.fn(
              "date_format",
              Sequelize.col("date_m"),
              "%d/%m/%Y %h:%i"
            ),
            "date_m",
          ],
        ],
        where: {
          mouvement_id: { [Op.eq]: mouvement_id },
          ville_id: { [Op.eq]: ville_id },
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
        include: [models.Ville],
      });
      res.status(200).json({ result: mouvements });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
