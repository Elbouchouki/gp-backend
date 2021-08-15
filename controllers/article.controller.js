const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    res.status(200).json({
      message: "article",
    });
  },
};
