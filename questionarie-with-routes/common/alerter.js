angular.module('questionarie.alerter', [])
  .service('Alerter', function() {
    this.alert = function(text) {
      alert(text);
    }
  });
