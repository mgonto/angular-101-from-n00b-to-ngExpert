angular.module('emailChecker.details', ['ui.router'])
  .config(function($stateProvider) {

    // Put route info here
  })
  .controller("DetailsCtrl", function() {

    function getEmailInfo(email) {
      var info = email.match(/^([^@\s]+)@([^@\s]+)$/);

      return {
        sender: info[1],
        domain: info[2]
      };
    }

    // Put your logic here

  });
