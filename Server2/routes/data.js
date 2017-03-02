var express = require('express');
var winRate = require('../json/winRate.json')

var router = express.Router();

router.get('/winRate.json', function(req, res, next) {
    res.send(winRate);
});

module.exports = router;
