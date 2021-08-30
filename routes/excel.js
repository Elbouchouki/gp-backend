const express = require("express");
const excelController = require("../controllers/excel.controller");
const router = express.Router();

router.post("/", excelController.index);

module.exports = router;
