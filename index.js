var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var new_module = require("./module");
var _ = require("underscore");
var app = express();
var PORT = 3000;

/// Setup body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Home endpoint
app.get("/", function(req, res) {
    res.send("UNIMPLEMENTED ENDPOINT");
});

// Other endpoints
app.get("ENTER_END_POINT_HERE", function(req, res) {
    res.send("UNIMPLEMENTED ENDPOINT");
});

app.post("ENTER_END_POINT_HERE", function(req, res) {
    res.send("UNIMPLEMENTED ENDPOINT");
});

app.delete("ENTER_END_POINT_HERE", function(req, res) {
    res.send("UNIMPLEMENTED ENDPOINT");
});

// Start listening on port PORT
app.listen(PORT, function() {
    console.log('Server listening on port:', PORT);
});

// DO NOT REMOVE
exports.PORT = PORT;
