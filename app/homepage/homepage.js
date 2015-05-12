'use strict';
(function () {
    var app = angular.module('myApp.homePage', ['ngRoute', 'ui.bootstrap']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'homepage/homepage.html',
            controller: 'homepage1Ctrl'
        });
    }]);

    app.controller('homepage1Ctrl', ['$scope', 'homepageData', '$rootScope', function($scope, homepageData, $rootScope) {
        $scope.myInterval = 4000;

        homepageData.get().success(function (data) {
            $scope.slides = data;
        });

        $rootScope.$broadcast('location:changed', {});      
    }]);

    app.factory('homepageData', ['$http', 'CONFIG', function ($http, CONFIG) {
      return { 
        get : function() {
          return $http.get(CONFIG.BASE_URL + '/homepage_data');
        }
      }
    }]);

})();