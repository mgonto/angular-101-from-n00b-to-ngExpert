angular.module('emailChecker', ['emailChecker.home', 'ui.router', 'emailChecker.details'])
  .config(function(EmailServiceProvider, $urlRouterProvider) {
    EmailServiceProvider.setBlacklist(['gonto@gonto.com']);
    $urlRouterProvider.otherwise('/');
  })
  .controller('MainCtrl', function($scope, EmailService) {

  });
