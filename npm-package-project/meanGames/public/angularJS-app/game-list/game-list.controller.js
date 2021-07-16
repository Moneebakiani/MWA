angular.module("meanGames").controller("GamesController", GamesController);

function GamesController(GamesDataFactory, $routeParams, AuthFactory, fileUpload) {
    const vm = this;

    vm.uploadFile = function () {
        var file = vm.myFile;
        console.log('file is ');
        console.log(file);
        var uploadUrl = "/fileUpload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };

    vm.title = "Mean Games App";
    const gameId = $routeParams.id;
    GamesDataFactory.getAll().then(function (response) {
        vm.games = response;
    });
    vm.isLoggedIn = function () {
        console.log(AuthFactory.auth)
        return AuthFactory.auth;
    };
    vm.addGame = function () {
        if (vm.myFile) {
            vm.uploadFile();
            vm.fileName = `images/${vm.myFile.name.replace(/ /g, "_")}`;
            console.log('New file ');
            console.log(vm.fileName);
        }
        const postData = {
            title: vm.newGameTitle,
            price: vm.newGamePrice,
            year: vm.newGameYear,
            minPlayers: vm.newGameMinPlayers,
            minAge: vm.newGameMinAge,
            maxPlayers: vm.newGameMaxPlayers,
            rate: vm.newGameRating,
            images: vm.myFile ? [vm.fileName] : []
        }
        console.log(`Post Data: ${JSON.stringify(postData)}`);
        if (vm.gameForm.$valid) {
            GamesDataFactory.addOne(postData).then(function (response) {
                console.log("Game saved");
            }).catch(function (error) {
                console.log("Error while saving ", error)
            })
        }
    };
    // $http.get("/api/games").then(function (response) {
    //     vm.games = response.data;
    // })



}
