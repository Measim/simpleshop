'use strict';
(function () {
    var app = angular.module('myApp.view2', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view2', {
          templateUrl: 'view2/view2.html',
          controller: 'View2Ctrl'
        });
    }]);

    app.controller('View2Ctrl', [
        '$scope',
        'cart',
        'notebooksCatalog',
        '$rootScope',
        function($scope, cart, notebooksCatalog, $rootScope) {
            notebooksCatalog.get().success(function (data) {
              $scope.items = data;
            });

          $scope.addToCart = function(cartItem) {
              cart.addToCart(cartItem);
          };

          $scope.removeFromCart = function(id) {
              cart.removeFromCart(id);
          };

          $rootScope.$broadcast('location:changed', {});
    }]);

})();