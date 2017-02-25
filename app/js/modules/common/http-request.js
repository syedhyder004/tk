module.exports = {
	processRequest:function($http,data)
	{
		$http({
			method: this.getReqMethod(data.url),
			url:  'http://localhost:3000/' + data.url
		}).then(function successCallback(response) {
			if(typeof data.success === 'function') {
				data.success(response);
			}
			else if(typeof data.callback === 'function') {
				data.callback(null,response);
			}
			else {
				console.error("No callback defined for "+data.url+" service call");
			}
		}, function errorCallback(err) {
			if(typeof data.success === 'function') {
				data.failure(err);
			}
			else if(typeof data.callback === 'function') {
				data.callback(err,null);
			}
			else {
				console.error("No callback defined for "+data.url+" service call");
			}
		});
	},
	getReqMethod:function(url) {
		switch(url)
		{
			default:
			return 'GET';
		}
	}
}