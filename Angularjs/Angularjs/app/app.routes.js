angular
  .module('chatApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'http://localhost:1051/'
      })
      .otherwise({
        redirectTo: '/'
      });
  })