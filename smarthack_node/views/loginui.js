var app = angular.module ('login', []);

app.controller ('sendData', function ($scope, $http) {

	$scope.login = function () {

		if (document.cookie)
			return;
		
		$scope.objToMongo = {
			username: $scope.username,
			pwd: $scope.pwd
		};

		$http.post ('/auth', $scope.objToMongo)
			.then (function (res) {
				if (res.data.result === 'true')
				{
					document.cookie = res.data.id;
					window.location = '/';
				} else {
					alert ('Eroare de conectare!');
					$scope.pwd = '';
				}
			}, function (err) {
				console.log (err);
			});
	};
});