var app = angular.module ('messageboardtopic', []);

var url = new URL(window.location.href);
var pid = url.searchParams.get('pid');

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

function currentDate () {
	var d = new Date();
	var year = d.getFullYear() % 100, mon = d.getMonth() + 1;
	var day = d.getDate(), hrs = d.getHours();
	var min = d.getMinutes(), sec = d.getSeconds();
	if(mon < 10) mon = '0' + mon;
	if(day < 10) day = '0' + day;
	if(hrs < 10) hrs = '0' + hrs;
	if(min < 10) min = '0' + min;
	if(sec < 10) sec = '0' + sec;
	return '' + year + '-' + mon + '-' + day + ' ' + hrs + ':' 
				+ min + ':' + sec;
}

app.controller ('manipulateData', function ($scope, $http) {
	$http.get ('/selectMessage/' + pid)
		.then (result => {
			$scope.subject = result.data.subject;
			$scope.content = result.data.content;
			$scope.date = result.data.date;
		});

	$scope.insert = function () {
		$scope.objToMongo = {
			_id: createID(),
			pid: pid,
			uid: document.cookie,
			content: $scope.fieldText,
			date: currentDate()
		}
		$http.post ('/insertReply', $scope.objToMongo)
			.then (() => {});

		alert ('Inserted!');
		window.location = 'messageboardtopic.html?pid=' + pid;
	}
});

app.controller ('showReplies', function ($scope, $http) {
	$http.get ('/selectAllReplyParent/' + pid)
		.then (result => {
			$scope.replies = result.data;
		});

	$scope.delete = function (idDel) {
		$http.delete ('/deleteReply/' + idDel)
			.then (() => {});

		alert ('Sucesfull deleted');
		window.location = 'messageboardtopic.html?pid=' + pid;
	}
});