module.exports = function (app, dirname) {
	app.get ('/', function (req, res) {
		res.sendFile (dirname + '/index.html');
	});

	app.get ('/messageboard.html', function (req, res) {
		res.sendFile (dirname + '/views/messageboard.html');
	});

	app.get ('/register.html', function (req, res) {
		res.sendFile (dirname + '/views/registration.html');
	});

	app.get ('/login.html', function (req, res) {
		res.sendFile (dirname + '/views/login.html');
	});

	app.get ('/messageboardtopic.html', function (req, res) {
		res.sendFile (dirname + '/view/messageboardtopic.html');
	});

	app.get ('/team.html', function (req, res) {
		res.sendFile (dirname + '/view/team.html');
	});

	app.get ('/teampage.html', function (req, res) {
		res.sendFile (dirname + '/view/teampage.html');
	});
};