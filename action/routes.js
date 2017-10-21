module.exports = function (app, dirname) {
	app.get ('/', function (req, res) {
		var myObj = {
			message: 'Hello world!'
		};
		res.send (myObj);
	});

	app.get ('/messageboard.html', function (req, res) {
		res.sendFile (dirname + '/views/messageboard.html');
	});
};