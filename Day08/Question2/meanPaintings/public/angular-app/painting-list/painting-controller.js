angular.module("meanPaintings").controller("PaintingController", PaintingController);

function PaintingController(PaintingDataFactory) {
    const vm = this;
    PaintingDataFactory.getAll().then(function (response) {
        vm.paintings = response;
    });

    // $http.get("/api/games").then(function (response) {
    //     vm.games = response.data;
    // })

}