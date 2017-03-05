angular.module('tp.Common')
	.directive('error',
		function () {
			var directive = {};

			directive.restrict = 'E'; /* restrict this directive to elements */

			directive.templateUrl = "dist/views/errorTemplate.html";

			return directive;
		});
