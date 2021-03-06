var express = require('express');
var router = express.Router();
const validator = require("../middlewares/validator");
var indexController = require('../controllers/indexController');

const multer = require("../middlewares/upload");
const uploadAvatar = multer.uploadAvatar;

router.get('/', indexController.getIndex);
router.get("/login", indexController.getLogin);
router.get("/logout", indexController.getLogout);
router.get("/cadastrar", indexController.getCadastrar);

router.post("/login", validator.validaCamposLogin, indexController.postLogin);
router.post("/cadastrar", uploadAvatar.single("avatar"), validator.validaCamposCadastroUsuario, indexController.postCadastrar);


module.exports = router;
