angular.module('emailChecker.home', ['emailChecker.emailCheckerButton', 'ui.router'])
  .config(function($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: '/email-checker-routing-step1/home/home.html',
      controller: 'HomeCtrl'
    });
  })
  .controller("HomeCtrl", function() {

  });
