var app = angular.module('ionicApp', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.views.maxCache(0);

  $stateProvider
    
    .state('/', {
      url: '/',
      controller: 'HomeCtrl',
      templateUrl: 'menu.html'
    });

  $urlRouterProvider.otherwise('/');
});

app.controller('HomeCtrl', function($scope) {

  $scope.selected = false;

  $scope.getMenus = function(a){
    
    var data = {
                   "foods":[
                      {
                          "name":"Nasi Goreng",
                          "qty":null
                      },
                      {
                          "name":"Rojak Ayam",
                          "qty":null
                      }
                   ],
                   "drinks":[
                      {
                          "name":"Milo Ais",
                          "qty":null
                      },
                      {
                          "name":"Sirap Ais",
                          "qty":null
                      }
                   ]
                  };

    if (a == "foods") {
      var foodsIsSelected = 1;
      $scope.data = data.foods;
    } else {
      var drinksIsSelected = 1;
      $scope.data = data.drinks;
    }

    $scope.isActive = function(b) {
      console.log(b);
      if ((foodsIsSelected == 1) && (b == 'foods')) {
        $scope.selected = true;
      } else if ((drinksIsSelected == 1) && (b == 'drinks')) {
        $scope.selected = true;
      }
    };

  }; // end scope getMenus

});