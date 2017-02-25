hackApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/dashboard', {
		templateUrl : "/dist/views/dashboard.html",
		controller : "dashboardController"
	}).otherwise({
		templateUrl : "/dist/views/main.html",
		controller: "indexController"
	})
}]);

