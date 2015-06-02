const angular = require('angular');
require('./vendor')();
const ngModule = angular.module('app', [
    require('angular-ui-router'),
    require('angular-resource'),
    require('angular-material'),
    'lbServices',
    'lumx'
]);
require('./config')(angular, ngModule)
require('./modules')(ngModule)
