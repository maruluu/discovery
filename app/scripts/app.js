'use strict';

angular.module('discoverApp', ['GithubService', 'GithubComponents', 'Recommendations'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/search.html',
        controller: 'ctrl.Search'
      })
      .when('/github/:user',{
        templateUrl: 'views/gh/user.html',
        controller: 'ctrl.GithubUserReposGists'
      })
      .when('/github/:user/:repo',{
        templateUrl: 'views/gh/repository.html',
        controller: 'ctrl.GithubRepoInfoContributors'
      })
      .when('/:user/recommendations',{
        templateUrl: 'views/gh/recommendations.html',
        controller: 'ctrl.GithubUserRecommendations'
      })
      .when('/about', {
        templateUl: 'views/about.html',
        controller: 'ctrl.About'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

