angular.module('tp.Common').service('NavigationService',function(){
      this.calculate = function(role) {
         return {
              "left":[{
                   "id":"dashboard",
                   "title":"Dashboard"
              }, {
                   "id":"taxinfo",
                   "title":"Tax Info",
                   "dropdown":[
                     {
                        "id":"compliance",
                        "title":"<i class='fa fa-credit-card'></i>&nbsp;&nbsp;Compliance"
                     },{
                        "id":"notices",
                        "title":"Notices"
                     },{
                        "id":"litigations",
                        "title":"Litigations"
                     },{
                        "id":"numbers",
                        "title":"Numbers"
                     },{
                        "id":"contacts",
                        "title":"<i class='fa fa-user-o'></i>&nbsp;&nbsp;Contacts"
                     }]
              }, {
                   "id":"records",
                   "title":"Records"
              }, {
                   "id":"reports",
                   "title":"Reports"
              }],
             "right":[{
                  "id":"profile",
                  "title":"My Profile"
             }, {
                  "id":"help",
                  "title":"Help",
                  "dropdown":[
                    {
                       "id":"email",
                       "title":"Email <br> test@tk.com"
                    },{
                       "id":"number",
                       "title":"Phone <br>123466789"
                    }]
             }]
        }
      }
});
