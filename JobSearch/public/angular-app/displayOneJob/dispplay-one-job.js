angular.module("meanJobss").controller("JobController", JobController);

function JobController(JobsDataFactory, $routeParams, $location, $window) {
    const vm = this;
    const jobId = $routeParams.id;
    vm.hidden = true;
    JobsDataFactory.getOne(jobId).then(function (response) {
        vm.job = response;
    });

    vm.show = function () {

        vm.hidden = vm.hidden ? false : true;
    }

    vm.RemoveJob = function () {
        JobsDataFactory.deleteOne(jobId).then(function (response) {
            console.log(response);
            $location.path("/jobs");
        }).catch(function (err) {
            console.log(err);
        });
    };

    vm.updateJob = function () {
        let skill = vm.newSkills;
        let res = skill.split(",");

        const postData = {
            title: vm.newTitle,
            salary: parseFloat(vm.newSalary),
            description: vm.newDescription,
            experience: parseInt(vm.newExperience),
            skills: res,
            postDate: vm.newPostDate
        };
        if (vm.jobUpdateForm.$valid) {
            JobsDataFactory.updateOne(jobId, postData).then(function (response) {
                console.log("Job update Saved");
                $window.location.reload();
            }).catch(function (error) {
                console.log("Error while update saving ", error);
            });
        };
    }



}