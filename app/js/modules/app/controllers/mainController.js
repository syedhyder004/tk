angular.module('tp.Common')
    .controller('MainCtrl', MainCtrl);
function MainCtrl($scope, $location) {
    var main = this;
    main.currentUser = null;

   /* $scope.$on('onCurrentUserId', function (ctx, id) {
        main.currentUser = LoginService.getCurrentUser();
    });

    main.logout = function() {
        LoginService.logout();
        main.currentUser = null;
    };*/
};
