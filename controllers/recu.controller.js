const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    const article_id = req.body.article_id;
    try {
      const recus = await models.Recu.findAll({
        attributes: [
          "caisse",
          "valeur",
          "societe",
          "participant",
          [
            Sequelize.fn(
              "date_format",
              Sequelize.col("date_paiment"),
              "%d/%m/%Y %T"
            ),
            "date_paiment",
          ],
          [
            Sequelize.fn("date_format", Sequelize.col("date_e"), "%d/%m/%Y %T"),
            "date_e",
          ],
          [
            Sequelize.fn("date_format", Sequelize.col("date_s"), "%d/%m/%Y %T"),
            "date_s",
          ],
          "etats",
        ],
        where: {
          article_id: { [Op.in]: article_id },
        },
        include: [models.Ville, models.Article],
        order: ["date_s"],
      });
      res.status(200).json({ result: recus });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async filterDate(req, res) {
    const article_id = req.body.article_id;
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const recus = await models.Recu.findAll({
        attributes: [
          "caisse",
          "valeur",
          "societe",
          "participant",
          [
            Sequelize.fn(
              "date_format",
              Sequelize.col("date_paiment"),
              "%d/%m/%Y %T"
            ),
            "date_paiment",
          ],
          [
            Sequelize.fn("date_format", Sequelize.col("date_e"), "%d/%m/%Y %T"),
            "date_e",
          ],
          [
            Sequelize.fn("date_format", Sequelize.col("date_s"), "%d/%m/%Y %T"),
            "date_s",
          ],
          "etats",
        ],
        where: {
          article_id: { [Op.in]: article_id },
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
        include: [models.Ville, models.Article],
        order: ["date_s"],
      });

      res.status(200).json({ result: recus });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async sortVille(req, res) {
    const article_id = req.body.article_id;
    const ville_id = req.params.ville_id;
    try {
      const recus = await models.Recu.findAll({
        attributes: [
          "caisse",
          "valeur",
          "societe",
          "participant",
          [
            Sequelize.fn(
              "date_format",
              Sequelize.col("date_paiment"),
              "%d/%m/%Y %T"
            ),
            "date_paiment",
          ],
          [
            Sequelize.fn("date_format", Sequelize.col("date_e"), "%d/%m/%Y %T"),
            "date_e",
          ],
          [
            Sequelize.fn("date_format", Sequelize.col("date_s"), "%d/%m/%Y %T"),
            "date_s",
          ],
          "etats",
        ],
        where: {
          article_id: { [Op.in]: article_id },
          ville_id: { [Op.eq]: ville_id },
        },
        include: [models.Ville, models.Article],
        order: ["date_s"],
      });

      res.status(200).json({ result: recus });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async sortVilleFilterDate(req, res) {
    const article_id = req.body.article_id;
    const ville_id = req.params.ville_id;
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const recus = await models.Recu.findAll({
        attributes: [
          "caisse",
          "valeur",
          "societe",
          "participant",
          [
            Sequelize.fn(
              "date_format",
              Sequelize.col("date_paiment"),
              "%d/%m/%Y %T"
            ),
            "date_paiment",
          ],
          [
            Sequelize.fn("date_format", Sequelize.col("date_e"), "%d/%m/%Y %T"),
            "date_e",
          ],
          [
            Sequelize.fn("date_format", Sequelize.col("date_s"), "%d/%m/%Y %T"),
            "date_s",
          ],
          "etats",
        ],
        where: {
          article_id: { [Op.in]: article_id },
          ville_id: { [Op.eq]: ville_id },
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
        include: [models.Ville, models.Article],
        order: ["date_s"],
      });
      res.status(200).json({ result: recus });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
