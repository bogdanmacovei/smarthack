var app = angular.module ('login', []);

app.controller ('sendData', function ($scope, $http) {
	$scope.login = function () {
		$scope.objToMongo = {
			username: $scope.username,
			pwd: $scope.pwd
		};

		alert (JSON.stringify($scope.objToMongo));

		$http.post ('/auth', $scope.objToMongo)
			.then (function (res) {
				if (res.data.result === 'true')
				{
					document.cookie = res.data.id;
					window.location = '/';
				}
			}, function (err) {
				alert ('Eroare, reincercati!');
				$scope.pwd = '';
			});
	};
});