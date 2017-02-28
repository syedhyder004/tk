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

myModule.config(function($routeProvider, $httpProvider, $provide/*,
  authProvider, CURRENT_BACKEND, jwtInterceptorProvider*/) {

    $routeProvider
        .when('/', {
            templateUrl : "/dist/views/login/template/loginTemplate.html",
            controller: "loginController",
            requiresLogin: true
        })
        .when('/dashboard', {
            templateUrl : "/dist/views/dashboard/template/dashboardTemplate.html",
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
        }
    };
    return loadingInterceptor;
});

