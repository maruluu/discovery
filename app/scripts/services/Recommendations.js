'use strict';

angular.module('Recommendations', ['ngResource'])
  .factory('Search', function ($resource) {
    // Service logic
    var search = $resource(
    'https://api.github.com/legacy/repos/search/:keyword',
      {
        'keyword' : 'jquery',
        'callback' : 'JSON_CALLBACK',
        'cache' : true,
        'per_page' : 20 // results per page
      }, {
        'get' : {
          'method' : 'JSONP'
        }
      }
    );

    return search;

  });
