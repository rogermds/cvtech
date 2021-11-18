var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.getUsuarioIndex);
router.get("/curriculo/ver", usuarioController.getVerCurriculo);
router.get("/curriculo/criar", usuarioController.getCriarCurriculo);

module.exports = router;
