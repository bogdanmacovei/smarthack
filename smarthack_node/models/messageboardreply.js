var mongoose = require ('mongoose');

var messageBoardReplySchema = new mongoose.Schema ({
	_id: Number,
	pid: Number, // asta e parentID
	uid: Number, // asta e userID
	content: String, 
	date: String
}, {collection: 'messageBoardReply'});

mongoose.model ('MessageBoardReply', messageBoardReplySchema);