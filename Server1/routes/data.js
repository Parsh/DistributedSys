var express = require('express');
var types = require('../json/type.json')

var router = express.Router();

router.get('/types.json', function(req, res, next) {
    res.send(types);
});

module.exports = router;
