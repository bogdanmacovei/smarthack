var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema ({
	_id: Number,
	uid: Number,
	subject: String,
	description: String,
	status: String,
	category: String,
	deadline: String
}, {collection: 'taskSchema'});

mongoose.model ('Task', taskSchema);