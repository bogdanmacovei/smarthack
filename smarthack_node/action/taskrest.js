module.exports = function (app, mongoose, bcrypt) {
	var Task = mongoose.model ('Task');

	// insert task

	app.post ('/insertTask', function (req, res) {
		var tempTask = new Task (req.body);
		tempTask.save ();
	});

	// select tasks

	app.get ('/selectAllTask', function (req, res) {
		Task.find({})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				console.log (result);
			});
	});

	// select specific task

	app.get ('/selectTaskId/:id', function (req, res) {
		Task.findOne ({_id: req.params.id})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				console.log (result);
			});
	});

	// select category

	app.get ('/selectTaskCategory/:category', function (req, res) {
		Task.findOne ({category: req.params.category})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				console.log (result);
			});
	});

	// show selected by deadline

	app.get ('/selectTaskByDeadline', function (req, res) {
		Task.find({}).sort({deadline: -1})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				console.log (result);
			});
	});

	// delete task (by id)

	app.delete ('/deleteTask/:id', function (req, res) {
		Task.deleteOne({_id: req.params.id})
			.catch (err => {
				console.log (err);
			})
			.then (() => {
				console.log ('task deleted');
			});
	});

	// update category

	app.put ('/updateCategory', function (req, res) {
		Task.updateOne ({_id: req.body._id}, {category: req.body.category})
			.catch (err => {
				console.log (err);
			})
			.then (() => {
				console.log ('succes update category');
			});
	});
};