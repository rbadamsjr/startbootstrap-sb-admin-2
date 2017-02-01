(function(){

var sbAdminApp = angular.module('app', ['ngRoute','ui.bootstrap']);

// Routing
sbAdminApp.config(['$routeProvider',
	function($routeProvider) {
		console.log($routeProvider);
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
		console.log('LoginCtrl');
	});

	sbAdminApp.controller('DashboardCtrl', function($scope) {
		console.log('DashboardCtrl');
	//	$('#side-menu').metisMenu();	
	});

	sbAdminApp.controller('SideNavCtrl', function($scope) {
		console.log('SideNavCtrl');
		$('#side-menu').metisMenu();
	});

})();
