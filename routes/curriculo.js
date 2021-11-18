var express = require("express");
var router = express.Router();
var curriculoController = require("../controllers/curriculoController");

router.get("/curriculo/", curriculoController.getVerCurriculo);
router.get("/curriculo/criar", curriculoController.getCriarCurriculo);

module.exports = router;