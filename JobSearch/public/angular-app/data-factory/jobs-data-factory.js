angular.module("meanJobss").factory("JobsDataFactory", JobsDataFactory);

function JobsDataFactory($http) {
    return {
        getAll: getAllJobs,
        getOne: getOneJob,
        addOne: addOneJob,
        deleteOne: deleteOneJob,
        updateOne: updateOneJob,
        search: searching
    }
    function searching(searchBy) {
        return $http.get("/api/jobs?title=" + searchBy).then(complete).catch(failed);
    }
    function getAllJobs(offset, count) {
        return $http.get("/api/jobs?offset=" + offset + "&count=" + count).then(complete).catch(failed);
    }
    function getOneJob(id) {
        return $http.get("/api/jobs/" + id).then(complete).catch(failed);
    }
    function addOneJob(job) {
        return $http.post("/api/jobs", job).then(complete).catch(failed);
    }
    function updateOneJob(id, job) {
        return $http.put("/api/jobs/" + id, job).then(complete).catch(failed);
    }
    function deleteOneJob(id) {
        return $http.delete("/api/jobs/" + id).then(complete).catch(failed);
    }

    function complete(response) {
        return response.data;
    }

    function failed(error) {
        return error.status.statusText;
    }
};