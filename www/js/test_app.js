var app = angular.module('myApp', ['ngStorage']);

app.controller('tableCtrl', function($scope, $localStorage) {

	

	$(document).ready(function() {
        $("#showMenu").hide(function() {});
    });

    $('#saveTableLink').click(function() {
        $("#drinks, #table_number").hide(function() {});
        // $("").hide(function() {});
        // $("").show(function() {});
        $("#foods, #showMenu").show(function() {});
    });

    $("#drink").click(function() {
        $("#drinks").show(function() {});
        $("#foods").hide(function() {});
    });

    var data = {
        "foods": [{
            "name": "Nasi Goreng",
            "qty": null
        }, {
            "name": "Rojak Ayam",
            "qty": null
        },
        {
            "name": "Roti Bakar",
            "qty": null
        },
        {
            "name": "Roti Canai Telur",
            "qty": null
        },
        {
            "name": "Murtabak",
            "qty": null
        }],
        "drinks": [{
            "name": "Milo Ais",
            "qty": null
        }, {
            "name": "Sirap Ais",
            "qty": null
        },
        {
            "name": "Bandung",
            "qty": null
        },
        {
            "name": "Cincau",
            "qty": null
        },
        {
            "name": "Teh Ais",
            "qty": null
        }]
    };

    $scope.localStorageFoods = $localStorage.foods;
    $scope.localStorageDrinks = $localStorage.drinks;

    $localStorage.$default({
        table_number: null,
        foods: data.foods,
        drinks: data.drinks
    });

    $scope.saveTableNum = function() {
        $localStorage.table_number = $scope.table_number;
    };


});

app.controller('successCtrl', function($scope, $localStorage) {

	

    $scope.localStorageFoods = $localStorage.foods;
    $scope.localStorageDrinks = $localStorage.drinks;
    $scope.table_number = $localStorage.table_number;

    

    //delete $localStorage.foods;
    //delete $localStorage.drinks;
    //delete $localStorage.table_number;

});