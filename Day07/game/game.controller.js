angular.module("myFirstApp").controller("GameController", GameController);

function GameController($http, $routeParams) {
    console.log($routeParams)
    const vm = this;
    const storeID = $routeParams.storeID;

    $http.get("https://www.cheapshark.com/api/1.0/games?id=" + storeID)
        .then(function (response) {
            console.log(response)
            vm.game = response.data.info;
        })
}

