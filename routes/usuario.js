var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");
var curriculoController = require("../controllers/curriculoController");

router.get("/", usuarioController.getUsuarioIndex);
router.get("/curriculo", curriculoController.getVerCurriculo);
router.get("/curriculo/criar", curriculoController.getCriarCurriculo);

module.exports = router;
