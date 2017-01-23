// Dependencies
// ============
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Initialize Express server
// =========================
var app = express();
var PORT = process.env.PORT || 3000;

// Set up data parsing on Express server
// =====================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use('/app/home', express.static(__dirname + '/app/home'));
