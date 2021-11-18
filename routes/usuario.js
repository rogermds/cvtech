var express = require("express");
var router = express.Router();
const validator = require("../middlewares/validator");
var usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.getUsuarioIndex);
router.get("/cadastrar", usuarioController.getCadastrar);
router.post("/cadastrar", validator.validaCamposCadastoUsuario, usuarioController.postCadastrar);

module.exports = router;
