const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.get("/", userController.index);
router.get("/:user_id", userController.user);

module.exports = router;
