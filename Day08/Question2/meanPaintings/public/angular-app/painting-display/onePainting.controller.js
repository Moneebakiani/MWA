angular.module("meanPaintings").controller("PaintController", PaintController);


function PaintController(PaintingDataFactory, $routeParams) {
    const vm = this;
    const paintId = $routeParams.id;
    PaintingDataFactory.getOne(paintId).then(function (response) {
        console.log(response)
        vm.paint = response;

    });


}