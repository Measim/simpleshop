(function (){
    var  app = angular.module('navbarHeader' ,[]);

    app.directive('headerNavbar', function() {
        return {
            restrict: 'E',
            templateUrl: './components/header/header.html',
            controller: 'HeaderCtrl'
        }
    });

    app.controller('HeaderCtrl',[
        '$scope',
        'cart',
        '$rootScope',
        '$location',
        function($scope, cart, $rootScope, $location) {
        $scope.goodsItems = {
            totalCartValue: 0,
            totalCartItems: 0
        };

        $scope.updateCart = function() {
            $scope.cart = cart.getCart();    
            $scope.goodsItems.totalCartValue = cart.getTotalCartValue(); 
            $scope.goodsItems.totalCartItems = cart.getTotalCartItems(); 
        };

        $rootScope.$on('cart:itemChanged', function(){
            $scope.updateCart();
        });

        $rootScope.$on('location:changed', function(){
            $scope.updateTab();
        });

        $scope.removeItems = function(id) {
            cart.removeFromCart(id);
        };

        $scope.updateTab = function() {
            if ($location.path() === '/') {
                $scope.activeHomeTab = true;
                $scope.activeTabletsTab = false;
                $scope.activeNotebooksTab = false;
            }

            if ($location.path() === '/view1') {
                $scope.activeHomeTab = false;
                $scope.activeTabletsTab = true;
                $scope.activeNotebooksTab = false;
            }

            if ($location.path() === '/view2') {
                $scope.activeHomeTab = false;
                $scope.activeTabletsTab = false;
                $scope.activeNotebooksTab = true;
            }
        };
        $scope.updateTab();
    }]);

})();