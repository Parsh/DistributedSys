var express = require('express');

var heroes = require('../json/heroes.json');
var types = require('../json/type.json');
var winRate = require('../json/winRate.json');

var router = express.Router();

router.get('/heroes.json', function(req, res, next) {
    res.send(heroes);
});
router.get('/types.json', function(req, res, next) {
    res.send(types);
});
router.get('/winRate.json', function(req, res, next) {
    res.send(winRate);
});

module.exports = router;
