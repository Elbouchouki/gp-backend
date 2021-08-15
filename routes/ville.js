const express = require("express");
const villeController = require("../controllers/ville.controller");
const router = express.Router();

router.get("/", villeController.index);

module.exports = router;
