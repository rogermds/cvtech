var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");
var curriculoController = require("../controllers/curriculoController");

const {uploadAvatar} = require("../middlewares/upload");

router.get("/", usuarioController.getUsuarioIndex);
router.get("/editar", usuarioController.getEditarUsuario);
router.get("/curriculo/criar", curriculoController.getCriarCurriculo);
router.get("/curriculo/editar/:id", curriculoController.getEditarCurriculo);
router.get("/curriculo/:id", curriculoController.getVisualizarCurriculo);

router.post("/editar", uploadAvatar.single("avatar"), usuarioController.postEditarUsuario);
router.post("/curriculo/criar", curriculoController.postCriarCurriculo);
router.post("/curriculo/editar/:id", curriculoController.postEditarCurriculo);

module.exports = router;