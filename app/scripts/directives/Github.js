'use strict';

angular.module('GithubDirective', [])
  .directive('tabs', function () {
    return {
    	restrict: 'E',
    	// transclusion consists of plucking out the content of a 
    	// custom directive, processing it against right scope and 
    	// then placing it at a marked position in the template of 
    	// that directive
    	transclude: true,
    	scope: {},
    	controller: function($scope, $element){
    		var panes = $scope.panes = [];
    	}
    };
  });
