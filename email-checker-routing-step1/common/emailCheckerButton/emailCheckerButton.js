angular.module('emailChecker.emailCheckerButton', ['emailChecker.emailService'])
.directive('emailCheckerButton', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/email-checker-routing-step1/common/emailCheckerButton/emailCheckerButton.html',
      scope: {
        label: '@',
        email: '='
      },
      controller: function($scope, EmailService) {
        $scope.checkEmail = function() {
          if (EmailService.isValid($scope.email)) {
            alert("It's a valid email :)!");
          } else {
            alert("It's an invalid email!");
          }
        }
      }

    }
  })
