var express = require('express');
var path = require('path');
var tablelist = require('../data/tablelist.js');
var bodyParser = require("body-parser");
var waitlist = require('../data/waitlist.js');

var routes = express.Router();

routes.get('', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
routes.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '../public/table.html')));
routes.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, '../public/reservation.html')));

routes.post('/api/tables', function (req, res) {
        
    if (tablelist.length <= 4) {
        let newReservation = req.body;
        tablelist.push(newReservation);
        res.json(true);   
    } else {
        let newReservation = req.body;
        waitlist.push(newReservation);
        res.json(false);   
    } 
})


routes.get("/api/tables", (req, res) => {
    res.json(tablelist);
})

routes.get("/api/waitlist", (req, res) => {
    res.json(waitlist);
})

routes.post("/api/clear", (req, res) => {
    waitlist = [];
    tablelist = [];
})

module.exports = routes;