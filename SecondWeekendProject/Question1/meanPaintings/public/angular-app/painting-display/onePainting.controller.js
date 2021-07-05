angular.module("meanPaintings").controller("PaintController", PaintController);


function PaintController(PaintingDataFactory, $routeParams, $location, AuthFactory) {
    const vm = this;
    const paintId = $routeParams.id;
    PaintingDataFactory.getOne(paintId).then(function (response) {
        console.log(response)
        vm.paint = response;

    });
    vm.isLoggedIn = function () {
        return AuthFactory.auth;
    };
    vm.DeletePainting = function () {

        PaintingDataFactory.deleteOne(paintId).then(function (response) {
            console.log(response);
            $location.path("/paintings");
        }).catch(function (err) {
            console.log(err);

        });
    };

}