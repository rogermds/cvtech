var express = require("express");
var router = express.Router();
var curriculoController = require("../controllers/curriculoController");

router.get("/", curriculoController.getVerCurriculo);
router.get("/criar", curriculoController.getCriarCurriculo);

module.exports = router;