/**
* Entry point for the application 
* renders login page
* TODO : should be smart enough to have the transition to requested page on load
*/
var indexController = hackApp.controller('indexController', ['$scope', '$window', '$location', '$http', function ($scope, $window,$location,$http) {
	$scope.appStrings = appStrings;
	// once the user clicks on login button and all validations are done
	// this action will redirect the user to dashboard
	// TODO : add the REST Service call to validate the user.
	$scope.showSpinner = false;
	$scope.submitForm = function() {
		// navigating to dashboard module
		// TODO : need to rename main to dashboard.
		//$location.path( "/main" );
		$scope.showSpinner = true;
		httpRequests.processRequest($http,{
			url:"",
			success:function(argument) {
				$scope.showSpinner = true;
				$location.path( "/dashboard" );
			},
			failure:function(argument) {
				$scope.showSpinner = true;
				console.log("failure");
			}
		});
	};
}]); 
