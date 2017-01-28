require('jquery');

var angular = require('angular'); // dołączenie angulara

var components = require('./app/components/components');
var uiRouter = require('angular-ui-router');
var services = require('./app/services/services');
var directives = require('./app/directives/directives');

require('./node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./node_modules/bootstrap/dist/js/bootstrap.min')

var app = angular.module('spotify-search', [components.name, uiRouter, services.name, directives.name]) // inicjalizacja głównego modułu angulara
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name:'list',
    url: '/artist/:name',
    template: '<list></list>'
  }).state({
    name: 'index',
    url: '/'
  })
  $urlRouterProvider.otherwise('/');
})
