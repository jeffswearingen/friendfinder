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

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// app.get('/api/friends', function(req, res) {

// });

app.listen(PORT, function() {
	console.log('FriendFinder listening on port ' + PORT);
});
