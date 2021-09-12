const express = require("express");
const statisticController = require("../controllers/statistic.controller");
const router = express.Router();

router.post("/", statisticController.index);
router.get("/day", statisticController.day);
router.get("/week", statisticController.week);
router.get("/month", statisticController.month);
router.get("/year", statisticController.year);
router.get("/seven", statisticController.seven);

module.exports = router;
