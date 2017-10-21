var app = angular.module ('messageboard', []);

app.controller ('showMessages', function ($scope, $http) {
	$http.get ('/selectAllMessage') 
		.then (function (response) {
			$scope.messages = response.data;
		});

	$scope.var = 'myVar';
});