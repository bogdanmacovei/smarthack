var app = angular.module ('mainPage', []);

app.controller ('myController', function ($scope, $http) {

	$http.get ('/selectUserById/' + document.cookie)
		.then (res => {
			$scope.nume = res.data;
		});
});