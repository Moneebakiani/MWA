angular.module("meanPaintings", ['ngRoute', "angular-jwt"]).config(config).run(run);

function config($httpProvider, $routeProvider, $locationProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");

    $routeProvider.when("/", {
        templateUrl: "angularJS-app/welcome/welcome.html",
        access: { restricted: false }
    }).when("/paintings", {
        templateUrl: "angularJS-app/painting-list/painting-list.html",
        controller: "PaintingController",
        controllerAs: "vm",
        access: { restricted: false }
    }).when("/paintings/:id", {
        templateUrl: "angularJS-app/painting-display/painting.html",
        controller: "PaintController",
        controllerAs: "vm",
        access: { restricted: false }
    }).when("/register", {
        templateUrl: "angularJS-app/register/register.html",
        controller: "RegisterController",
        controllerAs: "vm",
        access: { restricted: false }
    }).when("/profile", {
        templateUrl: "angularJS-app/profile/profile.html",
        controllerAs: "vm",
        access: { restricted: true }
    })
        .otherwise({
            redirectTo: "/"
        });
}

function run($rootScope, $location, $window, AuthFactory) {
    $rootScope.$on("$routeChangeStart", function (event, nextRoute, currentRoute) {
        if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token &&
            !AuthFactory.isLoggedIn) {
            event.preventDefault(); // Do not go to that path
            $location.path("/"); // Instead go to the root
        }
    });
}