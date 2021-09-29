const models = require("../models");
const { Sequelize, Op, QueryTypes } = require("sequelize");
const db = require("../models/index");
const sequelize = db.sequelize;
const moment = require("moment");

module.exports = {
  async index(req, res) {
    const ville_id = req.body.ville_id;
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const resp = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("date", Sequelize.col("date_paiment")), "date"],
          [Sequelize.fn("count", Sequelize.col("article_id")), "nbr"],
          [Sequelize.fn("sum", Sequelize.col("valeur")), "montant"],
          "etats",
          "article_id",
        ],
        where: {
          date_paiment: { [Op.between]: [date_from, date_to] },
          ville_id: { [Op.eq]: ville_id },
        },
        include: [models.Article],
        group: ["date", "article_id", "etats"],
      });

      res.status(200).json({
        result: resp,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async all(req, res) {
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const resp = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("date", Sequelize.col("date_paiment")), "date"],
          [Sequelize.fn("count", Sequelize.col("article_id")), "nbr"],
          [Sequelize.fn("sum", Sequelize.col("valeur")), "montant"],
          "etats",
          "article_id",
        ],
        where: {
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
        include: [models.Article],
        group: ["date", "article_id", "etats"],
      });

      res.status(200).json({
        result: resp,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async ville(req, res) {
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const resp = await sequelize.query(
        "call getStatistiques(:date_f,:date_t)",
        {
          replacements: {
            date_f: date_from,
            date_t: date_to,
          },
        }
      );

      res.status(200).json({
        result: resp,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async dates(req, res) {
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const resp = await sequelize.query("call getDates(:date_f,:date_t)", {
        replacements: {
          date_f: date_from,
          date_t: date_to,
        },
      });

      res.status(200).json({
        result: resp,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
