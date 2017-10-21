module.exports = function (app, mongoose, bcrypt) {

	var MessageBoard = mongoose.model ('MessageBoard');

	// insert new message 

	app.post ('/insertMessage', function (req, res) {
		var tempMessage = new MessageBoard (req.body);
		tempMessage.save();
	});

	// select all messages

	app.get ('/selectAllMessage', function (req, res) {
		MessageBoard.find({})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	// select specific 

	app.get ('/selectMessage/:id', function (req, res) {
		MessageBoard.findOne({_id: req.params.id})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				console.log (result);
			});
	});

	// select messages sorted by date desc (-1)

	app.get ('/selectMessageByDate', function (req, res) {
		MessageBoard.find({}).sort ({date: -1})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	// delete message by id

	app.delete ('/deleteMessage/:id', function (req, res) {
		MessageBoard.deleteOne ({_id: req.params.id})
			.catch (err => {
				console.log (err);
			})
			.then (() => {
				console.log ('succes');
			});
	});
};