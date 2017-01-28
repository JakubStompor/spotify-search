require('jquery');

var angular = require('angular'); // dołączenie angulara

var components = require('./app/components/components');
var uiRouter = require('angular-ui-router');
var services = require('./app/services/services');

require('./node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./node_modules/bootstrap/dist/js/bootstrap.min')

var app = angular.module('spotify-search', [components.name, uiRouter, services.name]) // inicjalizacja głównego modułu angulara
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name:'song',
    url: '/song/:id',
    template: '<song></song>'
  }).state({
    name:'list',
    url: '/',
    template: '<list></list>'
  });
  $urlRouterProvider.otherwise('/');
})
