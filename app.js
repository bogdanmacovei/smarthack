// Module instalate

var mongoose = require ('mongoose');
var bodyParser = require ('body-parser');
var express = require ('express');
var bcrypt = require('bcryptjs');

var app = express ();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/views'));

mongoose.Promise = global.Promise;

// Ma conectez la server

var server = app.listen(process.env.PORT || 8000, function (err) {
	if (err) throw err;
	console.log ('Connected to port 8000');
});

// Ma conectez la baza de date

mongoose.connect('mongodb://localhost:27017/mydb')
	.then(() => console.log('Connected'))
	.catch(err => console.log(err));

require ('./models/user');
require ('./models/team');
require ('./models/task');
require ('./models/messageboard');
require ('./models/messageboardreply');

var User = mongoose.model ('User');
var Team = mongoose.model ('Team');
var Task = mongoose.model ('Task');
var MessageBoard = mongoose.model ('MessageBoard');
var MessageBoardReply = mongoose.model ('MessageBoardReply');

var routes = require ('./action/routes');
routes (app, __dirname);

var restUser = require ('./action/userrest');
restUser (app, mongoose, bcrypt);

var restTeam = require ('./action/teamrest');
restTeam (app, mongoose, bcrypt);

var restTask = require ('./action/taskrest');
restTask (app, mongoose, bcrypt);

var restMessageBoard = require ('./action/messageboardrest');
restMessageBoard (app, mongoose, bcrypt);

var restMessageBoardReply = require ('./action/messageboardreplyrest');
restMessageBoardReply (app, mongoose, bcrypt);