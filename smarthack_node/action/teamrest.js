module.exports = function (app, mongoose, bcrypt) {

	var Team = mongoose.model ('Team');

	app.post ('/insertTeam', function (req, res) {
		var tempTeam = new Team (req.body);
		tempTeam.save();
	});

	app.get ('/selectAllTeam', function (req, res) {
		Team.find({})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	// specific team

	app.get ('/selectTeam/:id', function (req, res) {
		Team.findOne ({_id: req.params.id})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	// delete one team

	app.delete ('/deleteTeam/:id', function (req, res) {
		Team.deleteOne ({_id: req.params.id})
			.catch (err => {
				console.log (err);
			})
			.then (() => {
				console.log ('team deleted');
			});
	});

	// delete user from team 

	app.delete ('/deleteUser/:userid/:teamid', function (req, res) {
		// vreau sa sterg userid din echipa teamid 
		// voi reface array-ul cu membri 
		Team.findOne ({_id: req.params.teamid})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				var arr = result.members;

				var newArr = [];

				for (let i = 0; i < arr.length; ++i)
					if (arr[i].mid != req.params.userid)
						newArr.push (arr[i]);

				console.log (newArr);

				Team.updateOne ({_id: req.params.teamid}, {members: newArr})
					.catch (err1 => {
						console.log (err1);
					})
					.then (() => {
						console.log ('utilizator sters cu succes');
					});
			});
	});

	// add new user in this team

	app.put ('/addUser', function (req, res) {
		// pe cine? pe req.body = req.body.mid + req.body.role + req.body._id
		// daca exista, suprascriu informatia
		Team.findOne ({_id: req.body._id})
			.catch (err => {
				console.log (err);
			})
			.then (result => {

				var memberExists = false;

				// caut sa vad daca exista

				for (let i = 0; i < result.members.length; ++i) {
					if (result.members[i].mid === req.body.mid)
						memberExists = true;
				}

				// daca da, aici ii suprascriu informatia
				if (memberExists) {
					var arr = result.members; // preiau toate informatiile
					for (let i = 0; i < arr.length; ++i) {
						// parcurg array-ul, ma intereseaza unde mid === req.body.mid
						if (arr[i].mid === req.body.mid) {
							console.log ('Am intrat aici ' + arr[i].mid);
							// atunci schimb componenta rolurilor si opresc cautarea
							arr[i].role = req.body.role;
							break;
						}
					}

					// updatam informatia

					console.log (arr);

					Team.updateOne ({_id: req.body._id}, {members: arr})
						.catch (err2 => {
							console.log (err2);
						})
						.then (() => {
							console.log ('succes2');
						});

					return;
				}

				// altfel, trebuie sa adaug un membru noi in array

				var arr = result.members;
				arr.push ({mid: req.body.mid, role: req.body.role});


				// si sa fac update-ul: caut dupa _id-ul echipei,
				// si suprascriu cu informatia noua
				var find = {
					_id: req.body._id
				};

				var replace = {members: arr};

				Team.updateOne (find, replace)
					.catch (err1 => {
						console.log (err1);
					})
					.then (() => {
						console.log ('succes');
					});
			});

			res.end ();
	});
};