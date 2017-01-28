var angular = require('angular');

module.exports = angular.module('services', [])
.service('spotifyService', require('./spotify.service'));
