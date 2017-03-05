angular.module('tp.Common')
	.service('LoginService', function ($http) {
		this.login = function (data, callback) {
				$http.post('/authenticate', data).then(function (response) {
					callback(response, {});
				}, function (response) {
					callback(response, null);
				});
			},

			this.isAuthenticated = function (data, callback) {
				return false;
			}
	});
