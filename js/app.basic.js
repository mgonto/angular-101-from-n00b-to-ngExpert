[
  angular.module('questionarie', []),
  angular.module('questionarieTwo', [])
].forEach(function(module) {
  module
    .controller('QuestionarieCtrl', function($scope) {

    $scope.person = {
      name: 'John',
      likeNyan: false
    };

    $scope.showProfileCard = function() {
      $scope.cardShown = true;
    };

    $scope.showResponse = function() {
      alert($scope.person.likeNyan ? "Fun" : "Boring");
    }
  })
  .controller('QuestionarieCtrlWithService', function($scope, Alerter) {

    $scope.person = {
      name: 'John',
      likeNyan: false
    };

    $scope.showProfileCard = function() {
      $scope.cardShown = true;
    };

    $scope.showResponse = function() {
      Alerter.alert($scope.person.likeNyan ? "Fun" : "Boring");
    }
  })
  .service('Alerter', function() {
    this.alert = function(text) {
      alert(text);
    }
  })
  .controller('QuestionarieCtrlWithDirective', function($scope, Alerter) {

    $scope.person = {
      name: 'John',
      likeNyan: false
    };

    $scope.showProfileCard = function() {
      $scope.cardShown = true;
    };

    $scope.log = function(person) {
      console.log("Person collapsed", person);
    }

    $scope.showResponse = function() {
      Alerter.alert($scope.person.likeNyan ? "Fun" : "Boring");
    }
  })
  .directive('personCard', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/tpls/personCard.html',
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
  });
});


