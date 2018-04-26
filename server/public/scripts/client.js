console.log('js');

var app = angular.module('FoodApp', []);

app.controller('FoodController', function () {
    console.log('FoodController has been loaded');
    var self = this;

    self.food = 'candy';
})