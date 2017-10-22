var url = new URL(window.location.href);
var pid = url.searchParams.get('pid');

var app = angular.module ('messageboard', []);

app.controller ('showMessages', function ($scope, $http) {
	$http.get ('/selectAllMessage/') 
		.then (function (response) {

			$http.get ('/selectUserById/' + response.data[0].uid)
				.then (res => {
					console.log (res.data);
					$scope.nume = res.data;
				});

			$scope.messages = response.data;
		});
});