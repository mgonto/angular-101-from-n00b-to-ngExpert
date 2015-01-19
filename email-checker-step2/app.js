angular.module('emailChecker', []);

angular.module('emailChecker')
  .provider('EmailService', function() {

    this.blacklist = [];
    this.setBlacklist = function(blacklist) {
      this.blacklist = blacklist;
    };

    this.$get = function() {
      var service = {};
      var config = this;
      service.isValid = function(email) {
        if (config.blacklist.indexOf(email) > -1) {
          return false;
        }

        var regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return regex.test(email);

      }

      return service;
     }
  })
  .config(function(EmailServiceProvider) {
    EmailServiceProvider.setBlacklist(['gonto@gonto.com']);
  })
  .controller('MainCtrl', function($scope, EmailService) {



  // Add your Controller code here to check for the email
  // Use the function isEmail to know if it's an email or not

  $scope.checkEmail = function() {
    if (EmailService.isValid($scope.email)) {
      alert("It's a valid email :)!");
    } else {
      alert("It's an invalid email!");
    }
  }

})
