module.exports = function (app, mongoose, bcrypt) {
  // user register

  var User = mongoose.model ('User');

  app.post ('/insertUser', function (req, res) {
    var obj = {
      _id: req.body._id,
      username: req.body.username,
      pwd: bcrypt.hashSync(req.body.pwd, 10),
      role: req.body.role,
      activeRole: req.body.activeRole,
      team: req.body.team
    }
    var userTemp = new User (obj);
    userTemp.save();
  });

  // select user

  app.get ('/selectAllUser', function (req, res) {
    User.find({})
      .catch (err => {
        console.log (err);
      })
      .then (result => {
        res.send (result);
      });
  });

  // select user by id

  app.get ('/selectUserById/:id', function (req, res) {
    User.findOne ({_id: req.params.id})
      .catch (err => {
        console.log (err);
      })
      .then (result => {
        res.send (result.username);
      });
  });

  // Authentication

  app.post ('/auth', function (req, res) {
    User.findOne({username: req.body.username})
      .catch (err => {
        console.log (err);
      })
      .then (result => {
        if (bcrypt.compareSync(req.body.pwd, result.pwd))
          res.send ({
            result: 'true',
            id: result._id
          });
        else
          res.send ({result: 'false'});
      });
  });
}