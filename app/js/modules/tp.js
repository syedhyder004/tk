var myModule = angular.module('tp',
    [
        'ngRoute',
        /*'ngAnimate',
        'firebase',
        'ngMessages',*/
        'tp.Common',
        'tp.Dashboard',
        'tp.Login',
        'tp.Header',/*
        'tp.User',
        'auth0',
        'angular-jwt',
        'angular-storage'*/
    ]);
myModule.filter('ashtml', function($sce) { return $sce.trustAsHtml; });
myModule.config(function($routeProvider, $httpProvider, $provide/*,
  authProvider, CURRENT_BACKEND, jwtInterceptorProvider*/) {

    $routeProvider
        .when('/', {
            templateUrl : "dist/views/loginTemplate.html",
            controller: "loginController",
            requiresLogin: true
        })
        .when('/dashboard', {
            templateUrl : "dist/views/dashboardTemplate.html",
            controller : "dashboardController",
            requiresLogin: true
        })
        .otherwise({redirectTo: '/'});
    // Loading interceptor
    $httpProvider.interceptors.push('loadingInterceptor');
});


myModule.factory('loadingInterceptor', function (LoadingService) {
    var loadingInterceptor = {
        request: function (config) {
            LoadingService.setLoading(true);
            return config;
        },
        response: function (response) {
            LoadingService.setLoading(false);
            return response;
        },
        responseError: function (response) {
            console.error(response);
            LoadingService.setLoading(false);
            return response;
        },
    };
    return loadingInterceptor;
});
