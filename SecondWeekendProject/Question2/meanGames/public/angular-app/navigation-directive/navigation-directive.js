angular.module("meanGames").directive("paintingsNavigation",
    paintingsNavigation);
function paintingsNavigation() {
    return {
        restrict: "E",
        templateUrl: "angular-app/navigation-directive/navigation-directive.html"
    };
}
