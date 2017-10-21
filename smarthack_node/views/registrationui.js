function createID() {
	var d = new Date();
	var year = d.getFullYear() % 100, mon = d.getMonth() + 1;
	var day = d.getDate(), hrs = d.getHours();
	var min = d.getMinutes(), sec = d.getSeconds();
	if(mon < 10) mon = '0' + mon;
	if(day < 10) day = '0' + day;
	if(hrs < 10) hrs = '0' + hrs;
	if(min < 10) min = '0' + min;
	if(sec < 10) sec = '0' + sec;
	return '' + year + mon + day + hrs 
				+ min + sec;
}

var app = angular.module ('registration', []);

app.controller ('sendData', function ($scope, $http) {

	$scope.register = function () {

		if ($scope.pwd != $scope.cpwd) {
			alert ('Error');
			window.location = '/register.html';
			return;
		}

		$scope.objToMongo = {
			_id: createID (),
			username: $scope.username,
			pwd: $scope.pwd,
			role: [""],
			activeRoles: "",
			team: ""
		};

		$http.post ('/insertUser', $scope.objToMongo)
			.then (() => {});

		alert ('User created');

		window.location = '/login.html';
	}
});