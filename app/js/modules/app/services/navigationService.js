angular.module('tp.Common').service('NavigationService', function () {
	this.calculate = function (role) {
		return {
			"left": [{
				"id": "dashboard",
				"title": "Dashboard",
				"loginRequired": true
              }, {
				"id": "taxinfo",
				"title": "Tax Info",
				"loginRequired": true,
				"route": "taxinfo/compliance"
              }, {
				"id": "records",
				"title": "Records",
				"loginRequired": true
              }, {
				"id": "reports",
				"title": "Reports",
				"loginRequired": true
              }],
			"right": [{
				"id": "profile",
				"title": "My Profile",
				"loginRequired": true,
				"dropdown": [
					{
						"id": "settings",
						"title": "<i class='fa fa-wrench'></i>&nbsp;&nbsp;Settings"
                    }, {
						"id": "logout",
						"title": "<i class='fa fa-sign-out'></i>&nbsp;&nbsp;Logout",
						"route": "logout"
                    }]
		}, {
				"id": "help",
				"title": "Help",
				"loginRequired": false,
				"dropdown": [
					{
						"id": "email",
						"title": "Email <br> test@tk.com"
                    }, {
						"id": "number",
						"title": "Phone <br>123466789"
                    }]
		}]
		}
	}
});
