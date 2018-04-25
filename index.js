var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var routes = require("./app/routing/routes.js");
var tables = require("./app/data/tablelist.js");
var wait = require("./app/data/waitlist.js");

var app = express();
var PORT = process.env.PORT || 5555;

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/", routes);
app.use("/tables", routes);
app.use("/reservations", routes);
app.post("/reservations", routes);
app.get("/api/tables", routes);
app.get("/api/waitlist", routes);