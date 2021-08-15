const express = require("express");
const statisticController = require("../controllers/statistic.controller");
const router = express.Router();

router.get("/", statisticController.index);
router.get("/:ville_id", statisticController.sortVille);
router.post("/", statisticController.filterDate);
router.post("/:ville_id", statisticController.sortVilleFilterDate);

module.exports = router;
