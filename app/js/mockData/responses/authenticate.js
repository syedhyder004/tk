angular.module('tp').service('AuthDataModel',function() { 
	this.authenticate = function(){
		return {
			token: "12345"
		}
	}
});