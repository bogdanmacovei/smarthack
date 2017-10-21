var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema ({
	_id: Number,
	leaderId: Number,
	name: String,
	description: String,
	members: [{
		mid: Number,
		role: [String]
	}]
}, {collection: 'teamSchema'});

mongoose.model ('Team', teamSchema);