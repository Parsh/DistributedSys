var express = require('express');
var heroes = require('../json/heroes.json')

var router = express.Router();

router.get('/heroes.json', function(req, res, next) {
    res.send(heroes);
});

module.exports = router;
