angular.module("meanPaintings").controller("PaintingController", PaintingController);

function PaintingController(PaintingDataFactory, $window, AuthFactory, $location) {
    const vm = this;
    PaintingDataFactory.getAll().then(function (response) {
        vm.paintings = response;
    });

    vm.isLoggedIn = function () {
        return AuthFactory.auth;
    };

    vm.addPainting = function () {
        const postData = {
            name: vm.newPaintName,
            createdYear: vm.newCreatedYear,
            artist: vm.newArtist,

        }

        if (vm.paintingForm.$valid) {
            PaintingDataFactory.addOne(postData).then(function (response) {
                console.log("Painting saved");
                $window.location.reload();
            }).catch(function (error) {
                console.log("Error while saving ", error)
            })
        }
    };

    vm.search = function (searchBy) {
        PaintingDataFactory.search(searchBy).then(function (response) {
            console.log("search response:", response)
            $location.path("/paintings");
            vm.paintings = response;

        });
    };

}