angular.module('tp.Common')
.directive('help',
function () {
  var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */

    directive.templateUrl = "dist/views/helpTemplate.html";

    return directive;
});
