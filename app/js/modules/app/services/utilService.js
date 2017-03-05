angular.module('tp.Common')
	.service('UtilService',
		function ($rootScope) {
			$rootScope.hasErrors = false;
			this.setLoading = function (loading) {
				$rootScope.loadingView = loading;
			};
			this.setError = function (flag, errors) {
				$rootScope.hasErrors = true;
				$rootScope.errors = errors;
			}
		});
