	angular.module('tp.Common')
		.service('LoginService', function ($http) {
			this.login = function (data, callback) {
					$http.post('/authenticate', data).then(function (a, b) {
						callback(null, {});
					}, function (err) {
						callback(err, null);
					});
				},

				this.isAuthenticated = function (data, callback) {
					return false;
				}
		});
