var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

router.get('/', indexController.getIndex);
router.get("/login", indexController.getLogin);


module.exports = router;
