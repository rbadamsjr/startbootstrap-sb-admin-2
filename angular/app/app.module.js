(function(){

var sbAdminApp = angular.module('app', ['ngRoute',]);

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
  sbAdminApp.controller('DashboardCtrl',function(){

  });

  sbAdminApp.controller('LoginCtrl',function(){

  });

})();
