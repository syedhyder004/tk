/**
 * Entry point for the application
 * renders login page
 * TODO : should be smart enough to have the transition to requested page on load
 */
angular.module('tp.Login')
	.controller('loginController', function ($scope, $location, $cookieStore, $log, UtilService, LoginService) {
		$scope.appStrings = appStrings;
		// once the user clicks on login button and all validations are done
		// this action will redirect the user to dashboard
		// TODO : add the REST Service call to validate the user.
		$scope.showSpinner = false;
		var self = this;
		$scope.submitForm = function () {
			console.log($scope.user);
			var loginCallback = function (err, data) {
				if (err) {
					UtilService.setError(true, err.data);
					$cookieStore.put('token', '1234');
					$scope.user.password = "";
					$location.path('/dashboard');
				} else {
					$location.path('/dashboard');
				}
			}
			var loginData = {
				username: $scope.user.name,
				password: $scope.user.password
			};
			LoginService.login(loginData, loginCallback);
		};
	});
