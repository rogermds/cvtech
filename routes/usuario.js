var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.getUsuarioIndex);
router.get("/cadastrar", usuarioController.getCadastrar);
router.get("/curriculo", usuarioController.getCurriculo);

router.post("/cadastrar", usuarioController.postCadastrar);

module.exports = router;
