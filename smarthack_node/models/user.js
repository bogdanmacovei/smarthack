var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	_id: Number,
	username: String,
	pwd: String, 
	role: [String],
	activeRole: String,
	team: String
}, {collection: 'user'});

mongoose.model ('User', userSchema);