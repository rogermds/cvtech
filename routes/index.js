var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

router.get('/', indexController.getIndex);
router.get("/login", indexController.getLogin);
router.get("/cadastrar", indexController.getCadastrar);

module.exports = router;
