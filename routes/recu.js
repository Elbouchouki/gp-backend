const express = require("express");
const recuController = require("../controllers/recu.controller");
const router = express.Router();

router.get("/", recuController.index);
router.get("/:ville_id", recuController.sortVille);
router.post("/", recuController.filterDate);
router.post("/:ville_id", recuController.sortVilleFilterDate);

module.exports = router;
