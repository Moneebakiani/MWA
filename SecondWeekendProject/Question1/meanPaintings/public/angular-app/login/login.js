angular.module("meanPaintings").controller("LoginController", LoginController);
function LoginController(UsersDataFactory, $location, $window, AuthFactory, jwtHelper) {
    const vm = this;
    vm.isLoggedIn = function () {
        return AuthFactory.auth;
    };
    vm.login = function () {


        if (vm.username && vm.password) {
            const user = {
                username: vm.username,
                password: vm.password
            };
            UsersDataFactory.login(user).then(function (response) {

                $window.sessionStorage.token = response.token;
                AuthFactory.auth = true;
                var token = $window.sessionStorage.token;
                var decodedToken = jwtHelper.decodeToken(token);
                vm.loggedInUser = decodedToken.username;
                vm.username = "";
                vm.password = "";
                $location.path("/");

            }).catch(function (err) {
                console.log(err);
            });
        }
    }
    vm.logout = function () {
        AuthFactory.auth = false;
        delete $window.sessionStorage.token;
        $location.path("/");
    }
    vm.isActiveTab = function (url) {
        var currentPath = $location.path().split("/")[1];
        return (url === currentPath ? "active" : "");
    }
}