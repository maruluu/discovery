'use strict';

angular.module('discoverApp')
  .directive('GithubComponent', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the Github directive');
      }
    };
  });
