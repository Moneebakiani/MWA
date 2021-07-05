angular.module("meanPaintings").directive("paintingsNavigation",
    paintingsNavigation);
function paintingsNavigation() {
    return {
        restrict: "E",
        templateUrl: "angular-app/navigation-directive/navigation-directive.html"
    };
}
