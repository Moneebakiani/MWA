angular.module("meanPaintings").factory("PaintingDataFactory", PaintingDataFactory);
function PaintingDataFactory($http) {
    return {
        getAll: getAllPainting,
        getOne: getOnePainting,


    };

    function getAllPainting() {
        return $http.get("/api/paintings").then(complete).catch(failed);
    }
    function getOnePainting(id) {
        return $http.get("/api/paintings/" + id).then(complete).catch(failed);
    }
    function complete(response) {
        return response.data;
    }
    function failed(error) {
        return error.status.statusText;
    }
}