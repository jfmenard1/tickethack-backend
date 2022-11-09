var express = require('express');
var router = express.Router();
var moment = require('moment');
var Trip = require('../models/trips')

router.post('/', function(req, res) {
const departure = req.body.departure
const arrival = req.body.arrival
const date = new Date(req.body.date)
        Trip.find({departure: departure, arrival: arrival, date: { $gte: moment(date).startOf('day'), $lte: moment(date).endOf('day')}})
        .then(data => {
        res.json({result: data})
        })
  
});

module.exports = router; 

//date: { $gte: moment(date).startOf('day'), $lte: moment(date).endOf('day') } 