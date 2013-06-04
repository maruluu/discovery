'use strict';

angular.module('discoverApp', ['GithubService', 'GithubDirective'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/search.html',
        controller: 'MainCtrl'
      })
      .when('/github/:user',{
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/github/:user/:repo',{
        templateUrl: 'views/repository.html',
        controller: 'RepoCtrl'
      })
      .when('/about', {
        templateUl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
