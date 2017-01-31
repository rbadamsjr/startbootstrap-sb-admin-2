(function(){

var sbAdminApp = angular.module('app', ['ngRoute','ui.bootstrap']);

// Routing
sbAdminApp.config(['$routeProvider',
	function($routeProvider) {
	 $routeProvider.
		when('/', {
		  templateUrl: 'app/views/dashboard.html',
		  controller: 'DashboardCtrl'
		}).
		when('/login', {
		  templateUrl: 'app/views/login.html',
		  controller: 'LoginCtrl'
		}).
		otherwise({
		  redirectTo: '/'
		});

	}]);

  //Controllers
	sbAdminApp.controller('LoginCtrl', function($scope) {
		
	});

	sbAdminApp.controller('DashboardCtrl', function($scope) {

	});

})();
