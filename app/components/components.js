var angular = require('angular');

// robimy nowy moduł, aby dodawac wszystkie komponenty w jednym module
module.exports = angular.module('components', [])
.component('main', require('./main/main.component'))
.component('list', require('./list/list.component'));
