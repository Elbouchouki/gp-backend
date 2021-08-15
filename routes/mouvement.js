const express = require("express");
const mouvementController = require("../controllers/mouvement.controller");
const router = express.Router();

router.get("/:mouvement_id", mouvementController.index);
router.get("/:mouvement_id/:ville_id", mouvementController.sortVille);
router.post("/:mouvement_id", mouvementController.filterDate);
router.post(
  "/:mouvement_id/:ville_id",
  mouvementController.sortVilleFilterDate
);

module.exports = router;
