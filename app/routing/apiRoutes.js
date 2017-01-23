var path = require('path');

module.exports = function (app) {

	// Express routes
	// ==============

	app.get('/api/friends', function(req, res) {
		// show all friends
	});

	app.post('/api/friends', function(req, res) {
		// handle incoming posts, handle compatibility logic
		console.log(req);
	});

}