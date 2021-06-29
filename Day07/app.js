angular.module("myFirstApp", ['ngRoute']).config(config);

function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "mainPage/main.html",
        controller: "MyMainController",
        controllerAs: "MyCtrl"
    }).when("/game/:storeID", {
        templateUrl: "game/game.html",
        controller: "GameController",
        controllerAs: "gameCtrl"

    }).otherwise({
        redirectTo: "/"
    })
}