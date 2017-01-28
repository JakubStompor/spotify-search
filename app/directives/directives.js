var angular = require('angular');

module.exports = angular.module('directives', [])
.directive('tooltip', require('./tooltip.directive'));
