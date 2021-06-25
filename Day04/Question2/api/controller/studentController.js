
const mongoose=require("mongoose");
const Student=mongoose.model("Student");

module.exports.getAll=function(req,res){
  Student.find().exec(function(err,stu){
    console.log("Students Found");
    res.status(200).json(stu);
  });

}

module.exports.GetOne = function(req, res){
   
    const stdId = req.params.stdId;
    Student.findById(stdId).exec(function(err, doc){
    console.log("Student Found ", doc);
    res.status(200).json(doc);
    });
   }