window.$ = window.jQuery = require('jquery');
window.angular = require("angular");
window["angular-route"] = require("angular-route");
require("bootstrap");
window.CanvasJS = require('canvasjs');


window.hackApp = angular.module("hackApp", ["ngRoute"]);
window.appStrings = require("./modules/common/appStrings");
window.httpRequests = require("./modules/common/http-request");
window.utils = require("./modules/common/utils");

var controllers = require("./modules/controllers/*", {mode: 'hash', resolve: ['path-reduce', 'strip-ext']});
var router = require("./modules/routes/router");
