/**
 * Entry point for the application
 * renders login page
 * TODO : should be smart enough to have the transition to requested page on load
 */
angular.module('tp.Dashboard', ['tp.Common'])
	.controller('dashboardController', ['$scope', '$window', '$location', '$http', function ($scope, $window, $location, $http) {
		$scope.appStrings = appStrings;
		$scope.showSpinner = true;
}]);
