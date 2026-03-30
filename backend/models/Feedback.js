const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema ({
    CourseId :{
        type: String,
        require : true
    },
    CourseName : { 
        type : String ,
        require  : true
    },
    Duration : {
        type : String ,
        require : true 
    },
    rating :{
        type : Number
    }    
})
module.exports = mongoose.model("Feedback", feedbackSchema);