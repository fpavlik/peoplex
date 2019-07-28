var express = require('express');
var router = express.Router();
var checkAuth = require('./checkAuth');
var mainPage = require('./mainPage');
var pageLogin = require('./pageLogin');
var auth = require('./auth');
var direction = require('./direction');
var addDirection = require('./addDirection');
var offers = require('./offers');



/* GET home page. */
router.get('/', checkAuth, mainPage);

router.get('/page-login', pageLogin);

router.get('/direction', checkAuth, direction);

router.get('/offers', checkAuth, offers);


router.post('/page-login', auth);

router.post('/direction', addDirection);

module.exports = router;
