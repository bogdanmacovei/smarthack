var app = angular.module ('mainPage', []);

app.controller ('logOut', function ($scope) {
	$scope.logout = function () {
		alert ('Succesfull logout');
		document.cookie = '';
		window.location = '/login.html';
	};
});

app.controller ('myController', function ($scope, $http) {

	if (!document.cookie) {
		$scope.nume = 'Guest';
	} else {
		$http.get ('/selectUserById/' + document.cookie)
			.then (res => {
					$scope.nume = res.data;
			});
	}
});