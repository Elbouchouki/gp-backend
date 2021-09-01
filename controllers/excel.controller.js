const models = require("../models");
const { Op, QueryTypes } = require("sequelize");
const db = require("../models/index");
const sequelize = db.sequelize;
const moment = require("moment");
module.exports = {
  async index(req, res) {
    const list_ville = req.body.list_ville;
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const resp = await models.Recu.findAll({
        attributes: [
          [
            sequelize.fn(
              "date_format",
              sequelize.col("date_paiment"),
              "%d/%m/%Y"
            ),
            "date",
          ],
          [sequelize.fn("sum", sequelize.col("Recu.valeur")), "sum"],
        ],
        where: {
          date_paiment: { [Op.between]: [date_from, date_to] },
          ville_id: { [Op.or]: list_ville },
          etats: { [Op.eq]: "confirmé" },
        },
        group: "date",
        include: [models.Article],
      });
      // const illisible = await models.Recu.findAll({
      //   attributes: [
      //     [sequelize.fn("count", sequelize.col("recu.id")), "count"],
      //   ],
      //   where: {
      //     date_paiment: { [Op.between]: [date_from, date_to] },
      //     ville_id: { [Op.or]: list_ville },
      //     etats: { [Op.eq]: "confirmé" },
      //     article_id: { [Op.eq]: 2 },
      //   },
      // });
      // const perdu = await models.Recu.findAll({
      //   attributes: [
      //     [sequelize.fn("count", sequelize.col("recu.id")), "count"],
      //   ],
      //   where: {
      //     date_paiment: { [Op.between]: [date_from, date_to] },
      //     ville_id: { [Op.or]: list_ville },
      //     etats: { [Op.eq]: "confirmé" },
      //     article_id: { [Op.eq]: 3 },
      //   },
      // });
      // const entree_abonne = await models.Recu.findAll({
      //   attributes: [
      //     [sequelize.fn("count", sequelize.col("recu.id")), "count"],
      //   ],
      //   where: {
      //     date_paiment: { [Op.between]: [date_from, date_to] },
      //     ville_id: { [Op.or]: list_ville },
      //     etats: { [Op.eq]: "confirmé" },
      //     article_id: { [Op.eq]: 4 },
      //   },
      // });
      // const recharge_abonne = await models.Recu.findAll({
      //   attributes: [
      //     [sequelize.fn("count", sequelize.col("recu.id")), "count"],
      //   ],
      //   where: {
      //     date_paiment: { [Op.between]: [date_from, date_to] },
      //     ville_id: { [Op.or]: list_ville },
      //     etats: { [Op.eq]: "confirmé" },
      //     article_id: { [Op.eq]: 5 },
      //   },
      // });
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
