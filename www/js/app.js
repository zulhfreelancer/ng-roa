var app = angular.module('ionicApp', ['ionic', 'ionic.utils']);

// Local storage - http://learn.ionicframework.com/formulas/localstorage/
angular.module('ionic.utils', [])
.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);

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

app.controller('HomeCtrl', function($scope, $localstorage) {

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

    // Get saved localstorage menu data, prepare and pass it to XXX function
    function localStorageMenu(c){
      var b = $localstorage.getObject('menu');
      // If user requested foods data
      if (c == "foods") {
        $scope.data = b.foods;
        console.log( $scope.data );
      } else {
        $scope.data = b.drinks;
        console.log( $scope.data );
      }
    }

    function whatIsUserRequesting(){
      // If user click on Foods tab inside the view, return foods data
      if (a == "foods") {
        localStorageMenu("foods");
      } else {
        // If user click on Drinks tab inside the view, return drinks data
        localStorageMenu("drinks");
      }
    }
    
    // If localstorage is not empty (menu is not empty)
    if (localStorage.getItem('menu') !== null) {
      console.log("Local storage exist. Do nothing");
      whatIsUserRequesting();
    } else{
      console.log("Local storage empty");
      // If localstorage of menu is empty and not exist, push the remote data to browser local storage
      var saveMenu1 = $localstorage.setObject('menu', data);
      console.log("Now got something in it!");
      // Populate the localstorage data into the view
      localStorageMenu("foods");
    }
    

  }; // end scope getMenus

});