var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");
var curriculoController = require("../controllers/curriculoController");

router.get("/", usuarioController.getUsuarioIndex);
//router.get("/curriculo/visualizar/", curriculoController.getVisualizarTodosCurriculos);
router.get("/curriculo//visualizar/:id", curriculoController.getVisualizarCurriculo);
router.get("/curriculo/criar", curriculoController.getCriarCurriculo);

router.post("/curriculo/criar", curriculoController.postCriarCurriculo);

module.exports = router;
