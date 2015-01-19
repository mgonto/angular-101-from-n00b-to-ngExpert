angular.module('questionarie.prefix', [])
  .filter('prefix', function() {
    return function(text, prefix) {
      return prefix + text;
    };
  });
