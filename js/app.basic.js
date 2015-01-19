angular.module('questionarie', []);

angular.module('questionarie')
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

});
