angular.module("meanPaintings", ['ngRoute']).config(config);

function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "angular-app/welcome/welcome.html",
    }).when("/paintings", {
        templateUrl: "angular-app/painting-list/painting-list.html",
        controller: "PaintingController",
        controllerAs: "vm"
    }).when("/paintings/:id", {
        templateUrl: "angular-app/painting-display/painting.html",
        controller: "PaintController",
        controllerAs: "vm"
    })
}