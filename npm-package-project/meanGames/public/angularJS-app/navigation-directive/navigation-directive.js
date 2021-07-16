angular.module("meanGames").directive("paintingsNavigation",
    paintingsNavigation);
function paintingsNavigation() {
    return {
        restrict: "E",
        templateUrl: "angularJS-app/navigation-directive/navigation-directive.html"
    };
}
