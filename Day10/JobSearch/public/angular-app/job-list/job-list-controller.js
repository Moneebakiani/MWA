angular.module("meanJobss").controller("JobListController", JobListController);

function JobListController(JobsDataFactory, $window) {
    const vm = this;
    vm.hidden = true;
    JobsDataFactory.getAll().then(function (response) {
        vm.jobs = response;
    });
    vm.show = function () {

        vm.hidden = vm.hidden ? false : true;
    }
    vm.addJob = function () {
        const postData = {
            title: vm.newTitle,
            salary: vm.newSalary,
            description: vm.newDescription,
            experience: vm.newExperience,
            skills: vm.newSkills,
            postDate: vm.newPostDate
        }
        if (vm.jobForm.$valid) {
            JobsDataFactory.addOne(postData).then(function (response) {
                console.log("Job Saved");
                $window.location.reload();
            }).catch(function (error) {
                console.log("Error while adding");
            });
        }
    }

}