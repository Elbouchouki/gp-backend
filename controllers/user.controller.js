const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const users = await models.User.findAll({});
      res.status(200).json({
        users: users,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async findUser(req, res) {
    try {
      const username = req.params.username;
      const user = await models.User.findOne({
        where: { username: { [Op.eq]: username } },
      });
      if (!user) {
        res.status(404).json({
          message: "user not found",
        });
      }
      res.status(200).json({
        user: user,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async addUser(req, res) {
    try {
      const username = req.body.username;
      const cin = req.body.cin;
      const nom = req.body.nom;
      const prenom = req.body.prenom;
      const phone = req.body.phone;
      const mail = req.body.mail;
      const password = req.body.password;
      const role_id = req.body.role_id;

      const checkUsername = await models.User.findOne({
        where: { username: { [Op.eq]: username } },
      });
      if (checkUsername) {
        res.status(409).json({
          message: "user already exists",
        });
        return;
      }
      const checkEmail = await models.User.findOne({
        where: { mail: { [Op.eq]: mail } },
      });
      if (checkEmail) {
        res.status(409).json({
          message: "email already exists",
        });
        return;
      }
      const checkCIN = await models.User.findOne({
        where: { cin: { [Op.eq]: cin } },
      });
      if (checkCIN) {
        res.status(409).json({
          message: "CIN already exists",
        });
        return;
      }

      const user = await models.User.create({
        username: username,
        cin: cin,
        nom: nom,
        prenom: prenom,
        phone: phone,
        mail: mail,
        password: password,
        role_id: role_id,
      });
      res.status(201).json({
        result: "user created",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async deleteUser(req, res) {
    try {
      const username = req.body.username;
      const user = await models.User.destroy({
        where: { username: { [Op.eq]: username } },
      });
      res.status(202).json({
        result: "user deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async updateUser(req, res) {
    try {
      const username = req.body.username;

      const cin = req.body.cin;
      const nom = req.body.nom;
      const prenom = req.body.prenom;
      const phone = req.body.phone;
      const mail = req.body.mail;
      const password = req.body.password;
      const role_id = req.body.role_id;

      const checkCIN = await models.User.findOne({
        where: { cin: { [Op.eq]: cin } },
      });
      if (checkCIN) {
        res.status(409).json({
          message: "CIN already exists",
        });
        return;
      }
      const checkEmail = await models.User.findOne({
        where: { mail: { [Op.eq]: mail } },
      });
      if (checkEmail) {
        res.status(409).json({
          message: "email already exists",
        });
        return;
      }
      const user = await models.User.update(
        {
          cin: cin,
          nom: nom,
          prenom: prenom,
          phone: phone,
          mail: mail,
          password: password,
          role_id: role_id,
        },
        {
          where: { username: { [Op.eq]: username } },
        }
      );
      res.status(202).json({
        result: "user updated",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
