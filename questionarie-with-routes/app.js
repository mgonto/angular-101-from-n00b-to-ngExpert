angular.module('questionarie', [
  'questionarie.list',
  'questionarie.show',
  'ui.router'
])
.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
})
.controller('MainCtrl', function($scope) {
  $scope.people = [
    {
      id: 1,
      name: 'Martin Gonto',
      likeNyan: true
    },
    {
      id: 2,
      name: 'Martin Marquesi',
      likeNyan: false
    },
    {
      id: 3,
      name: 'John Doe',
      likeNyan: true
    },
  ];
});


