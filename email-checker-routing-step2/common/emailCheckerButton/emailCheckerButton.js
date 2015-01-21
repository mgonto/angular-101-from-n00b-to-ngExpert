angular.module('emailChecker.emailCheckerButton', ['emailChecker.emailService'])
.directive('emailCheckerButton', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/email-checker-routing-step2/common/emailCheckerButton/emailCheckerButton.html',
      scope: {
        label: '@',
        email: '='
      },
      controller: function($scope, EmailService) {
        $scope.checkEmail = function() {
          EmailService.isValid($scope.email).then(function(valid) {
            if (valid) {
              alert("It's a valid email :)!");
            } else {
              alert("It's an invalid email!");
            }
          }, function(response) {
            console.log("There was an error checking the email", response);
          });
        }
      }

    }
  })
