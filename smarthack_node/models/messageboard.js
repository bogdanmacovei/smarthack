var mongoose = require ('mongoose');

var messageBoardSchema = new mongoose.Schema ({
	_id: Number,
	uid: Number,
	date: String, 
	subject: String,
	content: String
}, {collection: 'messageBoard'});

mongoose.model ('MessageBoard', messageBoardSchema);