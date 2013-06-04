'use strict';

angular.module('GithubDirective', []).


 directive('tabs', function () {
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

    		// Pane selection
    		$scope.select = function(pane){
    			angular.forEach(panes, function(pane){
    				pane.selected = false;
    			});

    			pane.selected = true;
    		}

    		// Add a new tab pane
    		this.addPane = function(pane){
    			if (panes.length === 0){
    				$scope.select(pane);
    				panes.push(pane);
    			}
    		},
    		template:
    		'<div class="tabbable">' + 
    			'<ul class="nav nav-tabs">' + 
    				'<li ng-repeat="pane in panes ng-class="{active:pane.selected">' + 
    					'<a href="" ng-click="select(pane)">{{pane.title}}</a>' + 
    				'</li>' + 
    				'</ul>' +
    				'<div class="tab-content" ng-transclude></div>' + 
    		'</div>',
    		replace: true
    	};
  }).
