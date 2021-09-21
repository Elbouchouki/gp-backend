const express = require("express");
const excelController = require("../controllers/excel.controller");
const router = express.Router();

router.post("/", excelController.index);
router.post("/all", excelController.all);
router.post("/ville", excelController.ville);
router.post("/dates", excelController.dates);

module.exports = router;
