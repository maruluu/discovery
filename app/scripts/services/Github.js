'use strict';

angular.module('GithubService', ['ngResource'])
  .factory('GithubResource', function ($resource) {
    // Service logic
    var github = $resource(
    'https://api.github.com/:query/:user/:repo/:spec',
      {
        'query': 'users',
        'user' : 'addyosmani',
        'repo' : 'repos',
        'spec' : '',
        'callback' : 'JSON_CALLBACK',
        'per_page' : 10
      }, {
        'get' : {
          'method' : 'JSONP'
        }
      }
    );

    return github;

  });
