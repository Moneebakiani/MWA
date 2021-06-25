const mongoose=require("mongoose");

const courseSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
       type:String,
       require:true
        }
    
});

const schoolSchema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    gpa:Number,
    courses:courseSchema

});

mongoose.model("Student",schoolSchema,"Students");