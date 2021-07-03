angular.module("meanJobss", ['ngRoute']).config(config);

function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "angular-app/welcome/welcome.html"
    }).when("/jobs", {
        templateUrl: "angular-app/job-list/job-list.html",
        controller: "JobListController",
        controllerAs: "vm"
    }).when("/jobs/:id", {
        templateUrl: "angular-app/displayOneJob/display-one-job.html",
        controller: "JobController",
        controllerAs: "vm"
    });
}