angular.module("meanPaintings").factory("PaintingDataFactory", PaintingDataFactory);
function PaintingDataFactory($http) {
    return {
        getAll: getAllPainting,
        getOne: getOnePainting,
        deleteOne: deletePainting,
        addOne: addOnePainting


    };
    function addOnePainting(painting) {
        return $http.post("/api/paintings", painting).then(complete).catch(failed);

    }
    function deletePainting(id) {
        return $http.delete("/api/paintings/" + id).then(complete).catch(failed);
    }
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