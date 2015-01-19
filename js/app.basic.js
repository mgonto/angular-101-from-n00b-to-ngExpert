angular.module('questionarie', []);

angular.module('questionarie')
  .controller('QuestionarieCtrl', function($scope) {

  $scope.person = {
    name: 'John',
    likeNyan: false
  };

  $scope.showResponse = function() {
    var text;
    if ($scope.person.likeNyan) {
      text = "Nyan is awesome!. You're awesome!";
    } else {
      text = "Don't be so boring! You should like nyan <3";
    }
    alert(text);
  };

});
