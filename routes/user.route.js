const express = require("express");
const UserModel = require("../models/user.model");
const morgan = require('morgan')

const userRouter = express.Router()

userRouter.post("/enroll", async(req,res)=>{
    const{id,username,password,enrolledCourses} = req.body;
    try{
        const user = new UserModel({
            id ,
            username,
            password,
            enrolledCourses
        });
       await user.save();
       res.status(200).json({message:"user enroll successfully"});   
    }
    catch(error){
        res.status(500).json({message:"unable to create the user"});
    }
});
userRouter.post("/login", async(req,res)=>{
    const{username,password} = req.body;
    try{
        const user = await UserModel({ username,password});
       if(!user){
        res.status(400).json({message:"user is not found, please enroll first"});
       }
       res.status(200).json({message:"user login successfully",user});
       
          
    }
    catch(error){
        res.status(500).json({message:"unable to create the user"});
    }
});
module.exports = userRouter