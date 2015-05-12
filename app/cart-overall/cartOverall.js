'use strict';

angular.module('myApp.cartOverall', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cart-overall', {
        templateUrl: 'cart-overall/cartOverall.html',
        controller: 'CartOverallCtrl'
    });
}])

.controller('CartOverallCtrl', ['$scope', 'cart', '$rootScope', function($scope, cart, $rootScope) {
	$scope.cartOverall = cart.getCart();
	$scope.totalValue = cart.getTotalCartValue();

	$scope.removeItemsFromCart = function(id) {
		cart.removeFromCart(id);
	};

    $rootScope.$on('cart:itemRemoved', function(){
    	$scope.cartOverall = cart.getCart();
    	$scope.totalValue = cart.getTotalCartValue();
	});

}]);