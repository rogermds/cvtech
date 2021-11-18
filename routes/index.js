var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

router.get('/', indexController.getIndex);
router.get("/login", indexController.getLogin);
router.post("/login", indexController.postLogin);
router.get("/logout", indexController.getLogout);

module.exports = router;
