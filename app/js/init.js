window.$ = window.jQuery = require('jquery');
window.angular = require("angular");
window["angular-route"] = require("angular-route");
require('angular-mocks');
require("bootstrap");
window.CanvasJS = require('canvasjs');
window.appStrings = require("./modules/common/appStrings");
window.utils = require('./modules/common/utils');
var envConfig = require('./modules/config/environment');

// root file
require('./modules/tp');


// common contorller for all the routes where the user checking will be carried out
require('./modules/app/app');
require('./modules/app/controllers/mainController');

// all services included here.
require('./modules/app/services/loginService');
require('./modules/app/services/loadingService');
require('./modules/app/services/navigationService');

require('./modules/app/directives/help');

// header related files
require('./modules/header/header');
require('./modules/header/controller/headerController');

// login related files
require('./modules/login/login');
require('./modules/login/controller/loginController');

// dashboard related files
require('./modules/dashboard/dashboard');
require('./modules/dashboard/controller/dashboardController');
