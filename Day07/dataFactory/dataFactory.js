angular.module("myFirstApp").factory("GameController", GameController);
function GameController() {
    return {
        getGames: getGames,
        getGameDetail: getGameDetail
    };
    function getGames() {
        $http.get("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
            .then(complete)
            .catch(failed)
    }
    function getGameDetail(storeID) {
        $http.get("https://www.cheapshark.com/api/1.0/games?id=" + storeID)
            .then(complete)
            .catch(failed)
    }
    function complete() {
        return Response.data;
    }
    function failed() {
        return error.statusText;
    }
}