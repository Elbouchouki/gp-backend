const models = require("../models");
const { Op, QueryTypes } = require("sequelize");
const db = require("../models/index");
const sequelize = db.sequelize;
const moment = require("moment");

module.exports = {
  async index(req, res) {
    const ville_id = req.body.ville_id;
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const resp = await sequelize.query(
        "call getExcel(:ville_id,:date_f,:date_t)",
        {
          replacements: {
            ville_id: ville_id,
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
  async all(req, res) {
    const date_from = req.body.date_from;
    const date_to = req.body.date_to;
    try {
      const resp = await sequelize.query("call getExcel_all(:date_f,:date_t)", {
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
};
