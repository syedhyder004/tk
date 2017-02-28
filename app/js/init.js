window.$ = window.jQuery = require('jquery');
window.angular = require("angular");
window["angular-route"] = require("angular-route");
require("bootstrap");
window.CanvasJS = require('canvasjs');

// constants file
window.appStrings = require("./modules/common/appStrings");
window.utils = require('./modules/common/utils');
// root file
require('./modules/tp');


// common contorller for all the routes where the user checking will be carried out
require('./modules/app/app')
require('./modules/app/controllers/mainController');
require('./modules/app/services/LoginService');
require('./modules/app/services/LoadingService');

// header related files
require('./modules/header/header');
require('./modules/header/controller/headerController');

// login related files
require('./modules/login/login');
require('./modules/login/controller/loginController');

// dashboard related files
require('./modules/dashboard/dashboard');
require('./modules/dashboard/controller/dashboardController');
