const express = require("express");
const tarifController = require("../controllers/tarif.controller");
const router = express.Router();

router.get("/", tarifController.index);

module.exports = router;
