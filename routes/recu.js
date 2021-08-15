const express = require("express");
const recuController = require("../controllers/recu.controller");
const router = express.Router();

router.get("/:article_id", recuController.index);
router.get("/:article_id/:ville_id", recuController.sortVille);
router.post("/:article_id", recuController.filterDate);
router.post("/:article_id/:ville_id", recuController.sortVilleFilterDate);

module.exports = router;
