angular.module("meanGames").controller("GameController", GameController);

function _getStarsArray(rating) {
    return new Array(rating);
}

function GameController(GamesDataFactory, $routeParams, $location, AuthFactory, fileUpload, $window) {
    const vm = this;

    vm.uploadFile = function () {
        var file = vm.myFile;
        console.log('file is ');
        console.log(file);
        var uploadUrl = "/fileUpload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };

    const gameId = $routeParams.id;
    GamesDataFactory.getOne(gameId).then(function (response) {
        console.log(response)
        vm.game = response;
        vm.stars = _getStarsArray(vm.game.rate)
    });

    vm.DeleteGame = function () {

        GamesDataFactory.deleteOne(gameId).then(function (response) {
            console.log(response);
            $location.path("/");
        }).catch(function (err) {
            console.log(err);

        });
    };

    vm.updateImage = function () {
        if (vm.myFile) {
            vm.uploadFile();
            vm.fileName = `images/${vm.myFile.name.replace(/ /g, "_")}`;
            console.log('New file ');
            console.log(vm.fileName);
        }

        const postData = {
            image: vm.fileName
        };

        if (vm.updateForm.$valid) {
            GamesDataFactory.updateOne(gameId, postData).then(function (response) {
                console.log("Game Image updated");
                // $window.location.reload();
                // $location.path("games/" + gameId);
                vm.game.images.push(vm.fileName);
            }).catch(function (error) {
                console.log("Error while update saving ", error);
            });
        };
    }

    vm.isLoggedIn = function () {
        return AuthFactory.auth;
    };
}