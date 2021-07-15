angular.module("meanPaintings").controller("RegisterController", RegisterController);

function RegisterController(UsersDataFactory, $window) {
    const vm = this;
    vm.register = function () {
        let user = { username: vm.username, password: vm.password };
        if (!vm.username || !vm.password) {
            vm.err = "Please enter username and password";
        }
        else {
            if (vm.password !== vm.passwordRepeat) {
                vm.err = "Please make sure the password match";
            }
            else {
                UsersDataFactory.register(user).then(function (result) {
                    vm.message = "Successful Registeration";
                    vm.err = "";
                }).catch(function (err) {
                    console.log(err);
                });
            }
        }

    }
}