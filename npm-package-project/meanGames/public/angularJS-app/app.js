angular.module("meanGames", ["ngRoute", "angular-jwt"]).config(config).run(run);

function config($httpProvider, $routeProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");

    $routeProvider.when("/", {
        templateUrl: "angularJS-app/welcome/welcome.html",
        access: { restricted: false }
    }).when("/games", {
        templateUrl: "angularJS-app/game-list/game-list.html",
        controller: "GamesController",
        controllerAs: "vm",
        access: { restricted: false }
    }).when("/games/:id", {
        templateUrl: "angularJS-app/game-display/game.html",
        controller: "GameController",
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