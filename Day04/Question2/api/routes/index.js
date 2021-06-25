const express = require("express")

const router = express.Router();
const courseController = require("../controller/coursesController")
const controller = require("../controller/studentController");

router.route("/students").get(controller.getAll);

    
router.route("/students/:stdId").get(controller.GetOne);

router.route("/students/:stdId/courses")
.get(courseController.coursesGetAll);

router.route("/students/:stdId/courses/:courseId")
.get(courseController.courseGetOne);

module.exports=router;