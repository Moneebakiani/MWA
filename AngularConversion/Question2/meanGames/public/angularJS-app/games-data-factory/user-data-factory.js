angular.module("meanGames").factory("UsersDataFactory", UsersDataFactory);
function UsersDataFactory($http) {
    return {

        register: register,
        login: login
    };
    function login(user) {
        return $http.post("/api/users/login", user).then(complete).catch(failed);

    }
    function register(user) {
        return $http.post("/api/users/register", user).then(complete).catch(failed);

    }
    function complete(response) {

        return response.data;
    }
    function failed(error) {
        return error.status.statusText;
    }
}