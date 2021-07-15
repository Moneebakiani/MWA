angular.module("meanPaintings").directive("paintingsNavigation",
    paintingsNavigation);
function paintingsNavigation() {
    return {
        restrict: "E",
        templateUrl: "angularJS-app/navigation-directive/navigation-directive.html"
    };
}
