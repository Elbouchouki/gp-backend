const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const total = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("recu.id")), "count"],
          [Sequelize.fn("sum", Sequelize.col("recu.valeur")), "sum"],
        ],
      });
      const articles = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("recu.id")), "count"],
          [Sequelize.fn("sum", Sequelize.col("recu.valeur")), "sum"],
        ],
        group: ["article_id"],
        include: [models.Article],
      });
      const villes = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("recu.id")), "count"],
          [Sequelize.fn("sum", Sequelize.col("recu.valeur")), "sum"],
        ],
        group: ["ville_id"],
        include: [models.Ville],
      });
      const mouvement_total = await models.Mouvement.count();
      const mouvement_mouv = await models.Mouvement.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("mouvement.id")), "count"],
        ],
        group: ["mouvement_id"],
        include: [models.Mouv],
      });
      const mouvement_ville = await models.Mouvement.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("mouvement.id")), "count"],
        ],
        group: ["ville_id"],
        include: [models.Ville],
      });
      res.status(200).json({
        recus: {
          total: total,
          articles: articles,
          villes: villes,
        },
        mouvements: {
          total: mouvement_total,
          mouvs: mouvement_mouv,
          villes: mouvement_ville,
        },
      });
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
      const total = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("recu.id")), "count"],
          [Sequelize.fn("sum", Sequelize.col("recu.valeur")), "sum"],
        ],
        where: {
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
      });
      const articles = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("recu.id")), "count"],
          [Sequelize.fn("sum", Sequelize.col("recu.valeur")), "sum"],
        ],
        where: {
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
        group: ["article_id"],
        include: [models.Article],
      });
      const villes = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("recu.id")), "count"],
          [Sequelize.fn("sum", Sequelize.col("recu.valeur")), "sum"],
        ],
        where: {
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
        group: ["ville_id"],
        include: [models.Ville],
      });

      const mouvement_total = await models.Mouvement.count({
        where: {
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
      });
      const mouvement_mouv = await models.Mouvement.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("mouvement.id")), "count"],
        ],
        where: {
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
        group: ["mouvement_id"],
        include: [models.Mouv],
      });
      const mouvement_ville = await models.Mouvement.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("mouvement.id")), "count"],
        ],
        where: {
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
        group: ["ville_id"],
        include: [models.Ville],
      });
      res.status(200).json({
        recus: {
          total: total,
          articles: articles,
          villes: villes,
        },
        mouvements: {
          total: mouvement_total,
          mouvs: mouvement_mouv,
          villes: mouvement_ville,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async sortVille(req, res) {
    const ville_id = req.params.ville_id;
    try {
      const total = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("recu.id")), "count"],
          [Sequelize.fn("sum", Sequelize.col("recu.valeur")), "sum"],
        ],
        where: {
          ville_id: { [Op.eq]: ville_id },
        },
      });
      const articles = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("recu.id")), "count"],
          [Sequelize.fn("sum", Sequelize.col("recu.valeur")), "sum"],
        ],
        where: {
          ville_id: { [Op.eq]: ville_id },
        },
        group: ["article_id"],
        include: [models.Article],
      });

      const mouvement_total = await models.Mouvement.count({
        where: {
          ville_id: { [Op.eq]: ville_id },
        },
      });
      const mouvement_mouv = await models.Mouvement.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("mouvement.id")), "count"],
        ],
        where: {
          ville_id: { [Op.eq]: ville_id },
        },
        group: ["mouvement_id"],
        include: [models.Mouv],
      });

      res.status(200).json({
        recus: {
          total: total,
          articles: articles,
        },
        mouvements: {
          total: mouvement_total,
          mouvs: mouvement_mouv,
        },
      });
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
      const total = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("recu.id")), "count"],
          [Sequelize.fn("sum", Sequelize.col("recu.valeur")), "sum"],
        ],
        where: {
          ville_id: { [Op.eq]: ville_id },
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
      });
      const articles = await models.Recu.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("recu.id")), "count"],
          [Sequelize.fn("sum", Sequelize.col("recu.valeur")), "sum"],
        ],
        where: {
          ville_id: { [Op.eq]: ville_id },
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
        group: ["article_id"],
        include: [models.Article],
      });

      const mouvement_total = await models.Mouvement.count({
        where: {
          ville_id: { [Op.eq]: ville_id },
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
      });
      const mouvement_mouv = await models.Mouvement.findAll({
        attributes: [
          [Sequelize.fn("count", Sequelize.col("mouvement.id")), "count"],
        ],
        where: {
          ville_id: { [Op.eq]: ville_id },
          date_paiment: { [Op.between]: [date_from, date_to] },
        },
        group: ["mouvement_id"],
        include: [models.Mouv],
      });

      res.status(200).json({
        recus: {
          total: total,
          articles: articles,
        },
        mouvements: {
          total: mouvement_total,
          mouvs: mouvement_mouv,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
