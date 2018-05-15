var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var new_module = require("./module");
var _ = require("underscore");
var app = express();
var PORT = 3000;

// For using MongoDB
var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.load();

// Initializing/connecting the MongoDB database variable
mongoose.connect(process.env.MONGODB);
mongoose.connection.on('error', function() {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
});

// Setting up Socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http);

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


// io on connection
io.on('connection', function(socket) {
    console.log("Connected!");
    console.log(Object.keys(io.sockets.sockets).length);
});

// Start listening on port PORT
http.listen(3000, function() {
    console.log('Welcome Express.js template. Equiped with: ');
    console.log("[Mongoose, Socket.io, Underscore]");
});