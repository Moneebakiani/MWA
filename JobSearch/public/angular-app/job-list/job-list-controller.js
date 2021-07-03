angular.module("meanJobss").controller("JobListController", JobListController);

function JobListController(JobsDataFactory, $location, $window) {
    const vm = this;
    vm.hidden = true;

    let offset = 0;
    let count = 5;


    JobsDataFactory.getAll(offset, count).then(function (response) {
        vm.jobs = response;
    });
    vm.show = function () {

        vm.hidden = vm.hidden ? false : true;
    }
    vm.addJob = function () {
        let skill = vm.newSkills;
        let res = skill.split(",");
        const postData = {
            title: vm.newTitle,
            salary: parseFloat(vm.newSalary),
            description: vm.newDescription,
            experience: parseInt(vm.newExperience),
            skills: res,
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


    vm.nextPage = function () {
        offset += count;
        JobsDataFactory.getAll(offset, count).then(function (response) {
            vm.jobs = response;
        });
    };

    vm.previousPage = function () {
        if (offset != 0) {
            offset -= 5;
        }
        JobsDataFactory.getAll(offset, count).then(function (response) {
            vm.jobs = response;
        });
    };
    vm.search = function (searchBy) {
        JobsDataFactory.search(searchBy).then(function (response) {
            $location.path("/jobs");
            vm.jobs = response;

        });
    };

}