angular.module("meanGames").controller("GamesController", GamesController);

function GamesController(GamesDataFactory, $routeParams) {
    const vm = this;
    vm.title = "Mean Games App";
    const gameId = $routeParams.id;
    GamesDataFactory.getAll().then(function (response) {
        vm.games = response;
    });
    vm.addGame = function () {
        const postData = {
            title: vm.newGameTitle,
            price: vm.newGamePrice,
            year: vm.newGameYear,
            minPlayers: vm.newGameMinPlayers,
            minAge: vm.newGameMinAge,
            maxPlayers: vm.newGameMaxPlayers,
            rate: vm.newGameRating
        }

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
