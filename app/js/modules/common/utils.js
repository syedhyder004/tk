
module.exports = {
	getCookie:function(cookieName){
		let name = cookieName + "=",
	    	ca = document.cookie.split(';');
	    for(var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(cookieName) == 0) {
	            return c.substring(cookieName.length+1, c.length);
	        }
	    }
	    return "";
	},
	setCookie:function(cname,cvalue) {
		document.cookie = cname + "=" + cvalue + ";path=/";
	},
	createToolTip:function(){
		$('[data-toggle="tooltip"]').tooltip();
	},
	toggleSpinner:function(){
		$(".load-bar").toggleClass("hidden");
	}
};

