const models = require("../models");
const { Op, QueryTypes } = require("sequelize");
const db = require("../models/index");
const sequelize = db.sequelize;
const moment = require("moment");

module.exports = {
  async index(req, res) {
    const ville_id = req.body.ville_id;
    const dates = req.body.dates;
    console.log(dates);
    try {
      const resp = await sequelize.query("call getNewExcel(:ville_id,:dates)", {
        replacements: {
          ville_id: ville_id,
          dates: dates,
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
  async all(req, res) {
    const dates = req.body.dates;
    try {
      const resp = await sequelize.query("call getNewExcel_all(:dates)", {
        replacements: {
          dates: dates,
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
