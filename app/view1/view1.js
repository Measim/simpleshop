'use strict';
(function () {

    var app = angular.module('myApp.view1', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }]);

    app.controller('View1Ctrl', ['$scope', 'cart', '$rootScope', 'tabletsCatalog', function($scope, cart, $rootScope, tabletsCatalog) {
        tabletsCatalog.get().success(function (data) {
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