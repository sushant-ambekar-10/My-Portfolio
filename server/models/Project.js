const mongoose=require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    website:{
        type:String,
    },
    github:{
        type:String,
        required: true
    },
    link: {
        type: String,
    },
    skills:{
        type:[String],
    }
});


const Project=mongoose.model("projects",projectSchema);

module.exports={Project}