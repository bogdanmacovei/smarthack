module.exports = function (app, dirname) {
  app.get ('/', function (req, res) {
    res.sendFile (dirname + '/index.html');
  });

  app.get ('/messageboard.html', function (req, res) {
    res.sendFile (dirname + '/views/messageboard.html');
  });

  app.get ('/register.html', function (req, res) {
    res.sendFile (dirname + '/views/registration.html');
  });

  app.get ('/login.html', function (req, res) {
    res.sendFile (dirname + '/views/login.html');
  });
};