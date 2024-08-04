const express = require("express");
const CourseModel = require("../models/course.model");

const courseRouter = express.Router()

courseRouter.post("/course-create", async(req,res)=>{
    const{id,title,category,difficulty,description} = req.body;
    try{
        const course = new CourseModel({
            id,
            title,
            category,
            difficulty,
            description
        });
       await course.save();
       res.status(200).json({message:"course create successfully"});   
    }
    catch(error){
        res.status(500).json({message:"unable to create the course"});
    }
});
courseRouter.get("/courses",async(req,res)=>{
    try{
        const courses = await CourseModel.find();
        res.send(courses); 
    }catch(error){
        res.status(500).json({message:"unable to get the courses list"});
    }
})
module.exports = courseRouter