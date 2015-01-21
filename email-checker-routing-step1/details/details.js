angular.module('emailChecker.details', ['ui.router'])
  .config(function($stateProvider) {
    $stateProvider.state('details', {
      url: '/:email/details',
      templateUrl: '/email-checker-routing-step1/details/details.html',
      controller: 'DetailsCtrl'
    })
  })
  .controller("DetailsCtrl", function($stateParams, $scope) {

    $scope.email = $stateParams.email;

    function getEmailInfo(email) {
      var info = email.match(/^([^@\s]+)@([^@\s]+)$/);

      return {
        sender: info[1],
        domain: info[2]
      };
    }

    $scope.emailInfo = getEmailInfo($scope.email);
  });
