module.exports = function (app, mongoose, bcrypt) {

	var MessageBoardReplay = mongoose.model ('MessageBoardReply');

	// select all replies from a specified parent id 

	app.get ('/selectAllReplyParent/:pid', function (req, res) {
		MessageBoardReplay.find({pid: req.params.pid})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	// select all replies from a specified user id 

	app.get ('/selectAllReplyUser/:uid', function (req, res) {
		MessageBoardReplay.find({uid: req.params.uid})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	// add new reply

	app.post ('/insertReply', function (req, res) {
		var tempReply = new MessageBoardReplay (req.body);
		tempReply.save();
	});

	// delete for specific reply

	app.delete ('/deleteReply/:id', function (req, res) {
		MessageBoardReplay.deleteOne ({_id: req.params.id})
			.catch (err => {
				console.log (err);
			})
			.then (() => {
				console.log ('reply deleted');
			});
	});

	// // delete for specific parent id (aici e greu)

	// app.delete ('/deleteReplyByParent/:pid', function (req, res) {
	// 	MessageBoardReplay.find ({pid: req.params.pid})
	// 		.catch (err => {
	// 			console.log (err);
	// 		})
	// 		.then (result => {
	// 			var nr = result.length;
	// 			for (let i = 0; i < nr; ++i) {
	// 				MessageBoardReplay.deleteOne ({_id: result[i]._id})
	// 					.catch (err1 => {
	// 						console.log (err1);
	// 					})
	// 					.then (() => {
	// 						console.log ('deleted');
	// 					});
	// 			}
	// 		});
	// });
}