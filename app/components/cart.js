(function () {
    app = angular.module('myApp.cart', ['ngRoute']);

    app.service('cart', ['CartItem','$rootScope', function(CartItem, $rootScope){
        var cartItems = [];

        return {
            getCart: function() {
                return cartItems;
            },
            addToCart: function(cartItem) {
                var cartItemById = this.getCartItemById(cartItem.id),
                    quantity = cartItem.quantity,
                    newItem = {};

                if (cartItemById) {
                    quantity += cartItemById.getQuantity();
                    cartItemById.setQuantity(quantity);
                } else {
                    newItem = new CartItem(cartItem);
                    cartItems.push(newItem);
                }

                $rootScope.$broadcast('cart:itemChanged', {});
            },
            removeFromCart: function(id) {
                var cartItemId = id;

                angular.forEach(cartItems, function(item, index) {
                    if (item.getId() === cartItemId) {
                        cartItems.splice(index,1);
                        $rootScope.$broadcast('cart:itemChanged', {});
                    }
                })
            },
            getTotalCartValue: function() {
                var totalValue = 0;

                if (cartItems.length) {
                    angular.forEach(cartItems, function(item) {
                        totalValue += item.getPrice() * item.getQuantity();
                    });
                }

                return totalValue;
            },
            getTotalCartItems: function() {
                var totalCartCount = 0;

                angular.forEach(cartItems, function(item) {
                    totalCartCount += item.getQuantity();
                });

                return totalCartCount;
            },
            getCartItemById: function(cartItemId) {
                var matchedItem = null;

                angular.forEach(cartItems, function(item) {
                    if (cartItemId === item.getId()) {
                        matchedItem = item;
                    };
                });

                return matchedItem;
            }
        }
    }]);

    app.factory('CartItem', ['$rootScope', '$log', function ($rootScope, $log) {

        var item = function (cartItem) {
            this.setId(cartItem.id);
            this.setQuantity(cartItem.quantity);
            this.setPrice(cartItem.price);
            this.setImgUrl(cartItem.imageUrl);
            this.setModelName(cartItem.modelName);
            this.setDescription(cartItem.description);
        };

        item.prototype.setId = function(id) {
            if (id) {
                this._id = id;
            } else {
                $log.error('An ID must be provided');
            }
        };

        item.prototype.getId = function(){
            return this._id;
        };

        item.prototype.setQuantity = function(quantity) {
            if (quantity) {
                this._quantity = quantity;
            } else {
                $log.error('A quantity must be provided');
            }
        };

        item.prototype.getQuantity = function() {
            return this._quantity;
        };

        item.prototype.setPrice = function(price) {
            if (price) {
                this._price =  parseInt(price);
            } else {
                $log.error('A price must be provided');
            }
        };

        item.prototype.getPrice = function() {
            return this._price;
        };

        item.prototype.setImgUrl = function(imageUrl) {
            if (imageUrl) {
                this._imageUrl = imageUrl;
            }
        };

        item.prototype.getImgUrl = function() {
            return this._getImgUrl;
        };

        item.prototype.setModelName = function(modelName) {
            if (modelName) {
                this._modelName = modelName;
            }
        };

        item.prototype.getModelName = function() {
            return this._modelName;
        };

        item.prototype.setDescription = function(description) {
            if (description) {
                this._description = description;
            };
        };

        item.prototype.getDescription = function() {
            return this._description;
        };

        item.prototype.toObject = function() {
            return {
                id: this.getId(),
                quantity: this.getQuantity(),
                price: this.getPrice(),
                img: this.getImgUrl(),
                modelName: this.getModelName(),
                description: this.getDescription(),
            }
        };

        return item;
    }]);

    app.factory('tabletsCatalog', ['$http', 'CONFIG', function ($http, CONFIG) {
      return { 
        get : function() {
          return $http.get(CONFIG.BASE_URL + '/get_tablets_catalog');
        }
      }
    }]);

    app.factory('notebooksCatalog', ['$http', 'CONFIG', function ($http, CONFIG) {
      return { 
        get : function() {
          return $http.get(CONFIG.BASE_URL + '/get_notebooks_catalog');
        }
      }
    }]);
})();