const mongoose=require("mongoose");
const Student=mongoose.model("Student");


module.exports.coursesGetAll=function(req,res){
    const stdId = req.params.stdId;
    Student.findById(stdId).select("courses").exec(function(err,course){
      res.status(200).json(course);
    });
  
  }
  

module.exports.courseGetOne = function(req, res){
    const stdId = req.params.stdId;
    const courseId = req.params.courseId;
    console.log("hre");
    Student.findById(stdId).select("courses").exec(function(err,courses){
      // const Courses = std.courses.findById(courseId);
      console.log("course found: ", courses.courses[2])
      res.status(200).json(courses.courses);
    })
}


