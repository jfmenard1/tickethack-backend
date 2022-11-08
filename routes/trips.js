var express = require('express');
var router = express.Router();
var Trip = require('../models/trips')

router.get('/', function(req, res) {
 res.json({result: req.body.departure})
});

module.exports = router;
