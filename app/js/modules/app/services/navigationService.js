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
				"dropdown": [
					{
						"id": "compliance",
						"title": "<i class='fa fa-credit-card'></i>&nbsp;&nbsp;Compliance"
                     }, {
						"id": "notices",
						"title": "Notices"
                     }, {
						"id": "litigations",
						"title": "Litigations"
                     }, {
						"id": "numbers",
						"title": "Numbers"
                     }, {
						"id": "contacts",
						"title": "<i class='fa fa-user-o'></i>&nbsp;&nbsp;Contacts"
                     }]
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
				"loginRequired": true
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
