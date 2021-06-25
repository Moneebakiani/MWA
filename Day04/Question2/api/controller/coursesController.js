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
    Student.findById(stdId).select("courses").exec(function(err,c){
      if(c.courses.id==courseId)
      res.status(200).json(c.courses);
      else
      res.status(200).send("course not found");

    })
}


