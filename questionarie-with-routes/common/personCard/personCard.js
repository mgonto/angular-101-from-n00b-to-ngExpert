angular.module('questionarie.personCard', [])
.directive('personCard', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/questionarie-with-routes/common/personCard/personCard.html',
      scope: {
        person: '=',
        show: '=',
        onCollapse: '&',
        title: '@'
      },
      controller: function($scope) {
        $scope.collapse = function() {
          $scope.show = false;
          $scope.onCollapse && $scope.onCollapse();
        }
      }
    };
  })
