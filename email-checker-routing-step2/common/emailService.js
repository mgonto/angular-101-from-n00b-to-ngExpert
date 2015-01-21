angular.module('emailChecker.emailService', [])
.provider('EmailService', function() {

    this.blacklist = [];
    this.setBlacklist = function(blacklist) {
      this.blacklist = blacklist;
    };

    this.$get = function($http) {
      var service = {};
      var config = this;
      service.isValid = function(email) {
        return $http({
          url: 'http://localhost:3001/check-email',
          method: 'POST',
          data: {
            email: email
          }
        }).then(function(response) {
          return response.data.isValid;
        });
      }

      return service;
     }
  });
