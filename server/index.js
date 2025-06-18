require("dotenv").config(); 
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
// const {
//   createProject,
//   updateProjectByTitle
// } = require('./routes/auth');
const projectRoutes= require("./routes/projects");
const DetailsRoutes=require("./routes/details");

const app=express();
app.use(cors());
app.use(express.json());

// router.post("/",createProject);
// router.put("/:title",updateProjectByTitle);

app.use('/api/projects', projectRoutes);
// app.use('/api/user',DetailsRoutes);

// const DB = "mongodb://localhost:27017/projects"

const PORT = process.env.PORT || 5000;
const DB=process.env.DB;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB connected !");
    app.listen(5000,()=>console.log("servser running on port 5000"));
}).catch(err=>console.error(err));