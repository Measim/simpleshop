'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'navbarHeader',
  'myApp.homePage',
  'myApp.cartOverall',
  'myApp.cart',
  'myApp.mock'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);