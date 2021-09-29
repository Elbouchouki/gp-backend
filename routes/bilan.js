const express = require("express");
const bilanController = require("../controllers/bilan.controller");
const router = express.Router();

router.get("/", bilanController.index);
router.get("/:ville_id", bilanController.sortVille);
router.post("/", bilanController.filterDate);
router.post("/:ville_id", bilanController.sortVilleFilterDate);

module.exports = router;
