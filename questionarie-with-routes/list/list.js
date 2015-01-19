angular.module('questionarie.list', [
  'ui.router',
  'questionarie.prefix'
])
  .config(function($stateProvider) {
    $stateProvider.state('list', {
      templateUrl: '/questionarie-with-routes/list/list.html',
      url: '/',
      controller: 'ListCtrl'
    })
  })
  .controller('ListCtrl', function($scope) {

  })
