var angular = require('angular');
require('tipso');
require('../../node_modules/tipso/src/tipso.min.css');

module.exports = function() {
  return {
    element: 'A',
    scope: {
      tooltip: '@' // interpolacja w atrybucie
    },
    link: function($scope, $element, $attrs) {
      $element.tipso({
        content: $scope.tooltip,
        titleContent: 'Album'
      });
      $scope.$watch('tooltip', function() {
        $element.tipso('update', 'content', $scope.tooltip);
      });
      $scope.$on("$destroy", function() {
        $element.tipso('destroy');
      })
    }
  }
};
