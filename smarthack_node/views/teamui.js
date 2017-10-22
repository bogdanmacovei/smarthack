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


var app = angular.module ('team', []);

app.controller ('showTeams', function ($scope, $http) {
	$http.get ('/selectAllTeam')
		.then (result => {
			$scope.teams = result.data;
		});
});

app.controller ('addTeam', function ($scope, $http) {
	$scope.create = function () {
		// daca rolul nu este de admin, nu poate crea
		$scope.objToMongo = {
			_id: createID(),
			leaderId: document.cookie,
			name: $scope.name,
			description: $scope.description,
			members: [{
				mid: document.cookie,
				role: 'Admin'
			}]
		};

		$http.post ('/insertTeam', $scope.objToMongo)
			.then (() => {});

		alert ('Team created!');
		window.location = '/team.html';
	}
})