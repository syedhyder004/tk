/**
* Entry point for the application 
* renders login page
* TODO : should be smart enough to have the transition to requested page on load
*/
var indexController = hackApp.controller('dashboardController', ['$scope', '$window', '$location', '$http', function ($scope, $window,$location,$http) {
	$scope.appStrings = appStrings;
	$scope.showSpinner = true;
	httpRequests.processRequest($http,{
		url:"",
		success:function(argument) {
			$scope.model = {
				compliance:{
					pending:10,
					ytdTaxAmount:{
						pending:10000,
						paid:1000,
					}
				},
				notices:{
					pending:1000,
					closed:10,
					new:0
				},
				litigations:{
					pending:1000,
					closed:0,
					new:10
				}
			};
			$scope.showSpinner = false;
		},
		failure:function(argument) {
			console.log("failure");
		}
	});
}]); 
