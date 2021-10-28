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
    const hour_from = req.body.hour_from;
    const hour_to = req.body.hour_to;
    const hour_type = req.body.hour_type;
    const is_hour = req.body.is_hour;
    try {
      var where = {};
      if (ville_id) {
        where["ville_id"] = { [Op.eq]: ville_id };
      }
      if (is_hour) {
        if (hour_type === "C") {
          where["date_paiment"] = {
            [Op.between]: [
              date_from + " " + hour_from,
              date_to + " " + hour_to,
            ],
          };
        } else {
          where["date_paiment"] = {
            [Op.and]: [
              sequelize.where(
                sequelize.fn("date", sequelize.col("date_paiment")),
                {
                  [Op.between]: [date_from, date_to],
                }
              ),
              sequelize.where(
                sequelize.fn("hour", sequelize.col("date_paiment")),
                {
                  [Op.between]: [hour_from, hour_to],
                }
              ),
            ],
          };
        }
      } else {
        where["date_paiment"] = {
          [Op.between]: [date_from + " 00:00:00", date_to + " 23:59:59"],
        };
      }
      const resp = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("date", Sequelize.col("date_paiment")), "date"],
          [Sequelize.fn("count", Sequelize.col("article_id")), "nbr"],
          [Sequelize.fn("sum", Sequelize.col("valeur")), "montant"],
          "etats",
          "article_id",
        ],
        where: where,
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
  async oncf(req, res) {
    const ville_id = req.body.ville_id;
    const year = req.body.year;
    try {
      const resp = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("month", Sequelize.col("date_paiment")), "mois"],
          [Sequelize.fn("count", Sequelize.col("article_id")), "nbr"],
          [Sequelize.fn("sum", Sequelize.col("valeur")), "montant"],
          "etats",
          "article_id",
        ],
        where: {
          ville_id: { [Op.eq]: ville_id },
          date_paiment: {
            [Op.and]: [
              sequelize.where(
                sequelize.fn("year", sequelize.col("date_paiment")),
                {
                  [Op.eq]: [year],
                }
              ),
            ],
          },
        },
        include: [models.Article],
        group: ["mois", "article_id", "etats"],
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
