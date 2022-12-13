var express = require('express');
var router = express.Router();

/* GET testApi listing. */
router.get('/', function(req, res, next) {
    res.send('respond with test');
});

module.exports = router;
