var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.getCurriculo);

module.exports = router;
