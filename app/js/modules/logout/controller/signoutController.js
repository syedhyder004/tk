angular.module('tp.SignOut').controller('SignoutCtrl', function ($scope, $location, $cookieStore) {
	$cookieStore.put('token', null);
	$location.path('/');
});
