console.log('client.js has been loaded');

var app = angular.module('FoodApp', []);

app.controller('FoodController', ['$http', function ($http) {
    console.log('FoodController has been loaded');
    var self = this;

    self.foods = getFoods();
    self.newFood = {};

    // Retrieve food items from the database;
    function getFoods() {
        // GET '/food' request: start
        $http({
            method: 'GET',
            url: '/food'
        })
            .then(function (response) {
                console.log(response);
                self.foods = response.data;
            })
            .catch(function (error) {
                console.log(`Error on /food GET: ${error}`);
            }); // GET '/food' request: end
    }

    // send food items to the database
    self.createFood = function () {
        console.log('Food to create:', self.newFood);
        $http({
            method: 'POST',
            url: '/food',
            data: self.newFood
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(`Error on /food POST: ${error}`);
        });
        getFoods();
    }

    // update food items in the database
    self.saveFood = function(foodToSave) {
        console.log('Food to save:', foodToSave);
        $http({
            method: 'PUT',
            url: '/food',
            data: foodToSave
        })
        .then(function (response) {
            console.log(response);
        });
        getFoods();
    }

    // delete food items in the database
    self.deleteFood = function(foodToDelete) {
        console.log('Food to delete:', foodToDelete);
        $http({
            method: 'DELETE',
            url: `/food/${foodToDelete._id}`,
        })
        .then(function (response) {
            console.log(response);
        });
        getFoods();
    }
}]);