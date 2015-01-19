angular.module('questionarie.show', [
  'questionarie.alerter',
  'questionarie.personCard',
  'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider.state('show', {
      templateUrl: '/questionarie-with-routes/show/show.html',
      url: '/questionarie/:id',
      controller: 'ShowCtrl'
    })
  })
  .controller('ShowCtrl', function($scope, $stateParams, Alerter) {

    $scope.person = _.find($scope.people, {id: parseInt($stateParams.id, 10)});

    $scope.showProfileCard = function() {
      $scope.cardShown = true;
    };

    $scope.log = function(person) {
      console.log("Person collapsed", person);
    }

    $scope.showResponse = function() {
      Alerter.alert($scope.person.likeNyan ? "Fun" : "Boring");
    }

});
