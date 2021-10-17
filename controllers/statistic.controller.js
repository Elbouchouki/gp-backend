const models = require("../models");
const { Op, QueryTypes } = require("sequelize");
const db = require("../models/index");
const sequelize = db.sequelize;
const moment = require("moment");
module.exports = {
  async index(req, res) {
    const startOfDay = req.body.date_from;
    const endOfDay = req.body.date_to;
    try {
      const day = await models.Recu.findAll({
        attributes: [
          [sequelize.fn("count", sequelize.col("id")), "count"],
          [sequelize.fn("sum", sequelize.col("valeur")), "sum"],
        ],
        where: {
          date_paiment: { [Op.between]: [startOfDay, endOfDay] },
          etats: { [Op.eq]: "confirmé" },
          article_id: { [Op.in]: [1, 2, 3, 6, 7, 8] },
        },
      });
      const dayArticle = await models.Recu.findAll({
        attributes: [
          [sequelize.fn("count", sequelize.col("id")), "count"],
          [sequelize.fn("sum", sequelize.col("valeur")), "sum"],
          "article_id",
        ],
        where: {
          date_paiment: { [Op.between]: [startOfDay, endOfDay] },
          etats: { [Op.eq]: "confirmé" },
          article_id: { [Op.in]: [1, 2, 3, 6, 7, 8] },
        },
        group: "article_id",
      });

      res.status(200).json({
        recus: day,
        article: dayArticle,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error",
      });
    }
  },
  async day(req, res) {
    const startOfDay = moment(new Date()).format("YYYY-MM-DD 00:00:00");
    const endOfDay = moment(new Date()).format("YYYY-MM-DD 23:59:59");
    try {
      const day = await models.Recu.findAll({
        attributes: [
          [sequelize.fn("count", sequelize.col("id")), "count"],
          [sequelize.fn("sum", sequelize.col("valeur")), "sum"],
        ],
        where: {
          date_paiment: { [Op.between]: [startOfDay, endOfDay] },
          etats: { [Op.eq]: "confirmé" },
          article_id: { [Op.in]: [1, 2, 3, 6, 7, 8] },
        },
      });
      const dayArticle = await models.Recu.findAll({
        attributes: [
          [sequelize.fn("count", sequelize.col("id")), "count"],
          [sequelize.fn("sum", sequelize.col("valeur")), "sum"],
          "article_id",
        ],
        where: {
          date_paiment: { [Op.between]: [startOfDay, endOfDay] },
          etats: { [Op.eq]: "confirmé" },
          article_id: { [Op.in]: [1, 2, 3, 6, 7, 8] },
        },
        group: "article_id",
      });

      res.status(200).json({
        recus: day,
        article: dayArticle,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error",
      });
    }
  },
  async week(req, res) {
    const startOfWeek = moment()
      .clone()
      .startOf("isoWeek")
      .format("YYYY-MM-DD 00:00:00");
    const endOfWeek = moment()
      .clone()
      .endOf("isoWeek")
      .format("YYYY-MM-DD 23:59:59");
    const startOfDay = moment(new Date()).format("YYYY-MM-DD 00:00:00");

    try {
      const week = await models.Recu.findAll({
        attributes: [
          [sequelize.fn("count", sequelize.col("id")), "count"],
          [sequelize.fn("sum", sequelize.col("valeur")), "sum"],
        ],
        where: {
          date_paiment: { [Op.between]: [startOfWeek, endOfWeek] },
          etats: { [Op.eq]: "confirmé" },
          article_id: { [Op.in]: [1, 2, 3, 6, 7, 8] },
        },
      });
      const weekArticle = await models.Recu.findAll({
        attributes: [
          [sequelize.fn("count", sequelize.col("id")), "count"],
          [sequelize.fn("sum", sequelize.col("valeur")), "sum"],
          "article_id",
        ],
        where: {
          date_paiment: { [Op.between]: [startOfWeek, endOfWeek] },
          etats: { [Op.eq]: "confirmé" },
          article_id: { [Op.in]: [1, 2, 3, 6, 7, 8] },
        },
        group: "article_id",
      });

      res.status(200).json({
        recus: week,
        article: weekArticle,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error",
      });
    }
  },
  async month(req, res) {
    const startOfMonth = moment()
      .startOf("month")
      .format("YYYY-MM-DD 00:00:00");
    const endOfMonth = moment().endOf("month").format("YYYY-MM-DD 23:59:59");
    const startOfDay = moment(new Date()).format("YYYY-MM-DD 00:00:00");

    try {
      const month = await models.Recu.findAll({
        attributes: [
          [sequelize.fn("count", sequelize.col("id")), "count"],
          [sequelize.fn("sum", sequelize.col("valeur")), "sum"],
        ],
        where: {
          date_paiment: { [Op.between]: [startOfMonth, endOfMonth] },
          etats: { [Op.eq]: "confirmé" },
          article_id: { [Op.in]: [1, 2, 3, 6, 7, 8] },
        },
      });
      const monthArticle = await models.Recu.findAll({
        attributes: [
          [sequelize.fn("count", sequelize.col("id")), "count"],
          [sequelize.fn("sum", sequelize.col("valeur")), "sum"],
          "article_id",
        ],
        where: {
          date_paiment: { [Op.between]: [startOfMonth, endOfMonth] },
          etats: { [Op.eq]: "confirmé" },
          article_id: { [Op.in]: [1, 2, 3, 6, 7, 8] },
        },
        group: "article_id",
      });

      res.status(200).json({
        recus: month,
        article: monthArticle,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error",
      });
    }
  },
  async year(req, res) {
    const startOfYear = moment().startOf("year").format("YYYY-MM-DD 00:00:00");
    const endOfYear = moment().endOf("year").format("YYYY-MM-DD 23:59:59");
    const startOfDay = moment(new Date()).format("YYYY-MM-DD 00:00:00");

    try {
      const year = await models.Recu.findAll({
        attributes: [
          [sequelize.fn("count", sequelize.col("id")), "count"],
          [sequelize.fn("sum", sequelize.col("valeur")), "sum"],
        ],
        where: {
          date_paiment: { [Op.between]: [startOfYear, endOfYear] },
          etats: { [Op.eq]: "confirmé" },
          article_id: { [Op.in]: [1, 2, 3, 6, 7, 8] },
        },
      });
      const yearArticle = await models.Recu.findAll({
        attributes: [
          [sequelize.fn("count", sequelize.col("id")), "count"],
          [sequelize.fn("sum", sequelize.col("valeur")), "sum"],
          "article_id",
        ],
        where: {
          date_paiment: { [Op.between]: [startOfYear, endOfYear] },
          etats: { [Op.eq]: "confirmé" },
          article_id: { [Op.in]: [1, 2, 3, 6, 7, 8] },
        },
        group: "article_id",
      });
      res.status(200).json({
        recus: year,
        article: yearArticle,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error",
      });
    }
  },
  async seven(req, res) {
    const endOfDay = moment().format("YYYY-MM-DD 23:59:59");
    const startOfYear = moment().startOf("year").format("YYYY-MM-DD 00:00:00");
    try {
      const seven = await models.Recu.findAll({
        attributes: [
          [sequelize.fn("count", sequelize.col("id")), "count"],
          [sequelize.fn("sum", sequelize.col("valeur")), "sum"],
          [sequelize.fn("month", sequelize.col("date_paiment")), "month"],
        ],
        where: {
          date_paiment: { [Op.between]: [startOfYear, endOfDay] },
          etats: { [Op.eq]: "confirmé" },
          article_id: { [Op.in]: [1, 2, 3, 6, 7, 8] },
        },
        group: "month",
      });
      res.status(200).json({
        seven: seven,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error",
      });
    }
  },
  async traffic(req, res) {
    const ville_id = req.body.ville_id;
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const sorties = await sequelize.query(
        "call getSorties(:ville_id,:date_f,:date_t)",
        {
          replacements: {
            ville_id: ville_id,
            date_f: date_from,
            date_t: date_to,
          },
        }
      );
      const entree = await sequelize.query(
        "call getEntree(:ville_id,:date_f,:date_t)",
        {
          replacements: {
            ville_id: ville_id,
            date_f: date_from,
            date_t: date_to,
          },
        }
      );
      res.status(200).json({
        entree: entree,
        sorties: sorties,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error",
      });
    }
  },
};
