const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    // const type = req.body.type;
    try {
      const bilans = await models.Bilan.findAll({
        attributes: [
          "caisse",
          "caisser",
          "montant",
          "type",
          "poste",
          [
            Sequelize.fn("date_format", Sequelize.col("date_d"), "%d/%m/%Y %T"),
            "date_d",
          ],
          [
            Sequelize.fn("date_format", Sequelize.col("date_f"), "%d/%m/%Y %T"),
            "date_f",
          ],
        ],
        // where: {
        //   type: { [Op.eq]: type },
        // },
        include: [models.Ville],
        order: ["date_d"],
      });
      res.status(200).json({ result: bilans });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async filterDate(req, res) {
    // const type = req.body.type;
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    // try {
    const bilans = await models.Bilan.findAll({
      attributes: [
        "caisse",
        "caisser",
        "montant",
        "type",
        "poste",
        [
          Sequelize.fn("date_format", Sequelize.col("date_d"), "%d/%m/%Y %T"),
          "date_d",
        ],
        [
          Sequelize.fn("date_format", Sequelize.col("date_f"), "%d/%m/%Y %T"),
          "date_f",
        ],
      ],
      where: {
        // type: { [Op.eq]: type },
        date_d: { [Op.between]: [date_from, date_to] },
      },
      include: [models.Ville],
      order: ["date_d"],
    });

    res.status(200).json({ result: bilans });
    // } catch (error) {
    //   res.status(500).json({
    //     message: "error",
    //   });
    // }
  },
  async sortVille(req, res) {
    // const type = req.body.type;
    const ville_id = req.params.ville_id;
    try {
      const bilans = await models.Bilan.findAll({
        attributes: [
          "caisse",
          "caisser",
          "montant",
          "type",
          "poste",
          [
            Sequelize.fn("date_format", Sequelize.col("date_d"), "%d/%m/%Y %T"),
            "date_d",
          ],
          [
            Sequelize.fn("date_format", Sequelize.col("date_f"), "%d/%m/%Y %T"),
            "date_f",
          ],
        ],
        where: {
          // type: { [Op.eq]: type },
          ville_id: { [Op.eq]: ville_id },
        },
        include: [models.Ville],
        order: ["date_d"],
      });

      res.status(200).json({ result: bilans });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async sortVilleFilterDate(req, res) {
    // const type = req.body.type;
    const ville_id = req.params.ville_id;
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const bilans = await models.Bilan.findAll({
        attributes: [
          "caisse",
          "caisser",
          "montant",
          "type",
          "poste",
          [
            Sequelize.fn("date_format", Sequelize.col("date_d"), "%d/%m/%Y %T"),
            "date_d",
          ],
          [
            Sequelize.fn("date_format", Sequelize.col("date_f"), "%d/%m/%Y %T"),
            "date_f",
          ],
        ],
        where: {
          // type: { [Op.eq]: type },
          ville_id: { [Op.eq]: ville_id },
          date_d: { [Op.between]: [date_from, date_to] },
        },
        include: [models.Ville],
        order: ["date_d"],
      });
      res.status(200).json({ result: bilans });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
