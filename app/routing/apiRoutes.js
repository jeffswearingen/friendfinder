var path = require('path');

var profiles = require('../data/friends.js');
console.log(profiles);
module.exports = function (app) {

	// Express routes
	// ==============

	app.get('/api/friends', function(req, res) {
		// show all friends
		res.json(profiles);
	});

	app.post('/api/friends', function(req, res) {
		// handle incoming posts, handle compatibility logic
		
//		console.log(req.body);
		profiles.push(req.body);
		console.log('-----');
		console.log(profiles);
	});

}