const express = require("express");
const excelController = require("../controllers/excel.controller");
const router = express.Router();

router.post("/", excelController.index);
router.post("/all", excelController.all);

module.exports = router;
