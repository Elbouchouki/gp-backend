const express = require("express");
const mouvementController = require("../controllers/mouvement.controller");
const router = express.Router();

router.get("/", mouvementController.index);
router.get("/:ville_id", mouvementController.sortVille);
router.post("/", mouvementController.filterDate);
router.post("/:ville_id", mouvementController.sortVilleFilterDate);

module.exports = router;
