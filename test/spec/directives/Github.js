'use strict';

describe('Directive: Github', function () {
  beforeEach(module('discoverApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<-github></-github>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the Github directive');
  }));
});
