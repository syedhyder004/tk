angular.module('tp.Common')
    .service('LoginService',function ($http) {
        this.login = function(data,callback){
          $http({
            method: 'GET',
            url:  'http://localhost:3000/'
          }).then(function successCallback(response) {
              callback(null,{});
          }, function errorCallback(err) {
              callback(err,null);
          });
        }
    });
