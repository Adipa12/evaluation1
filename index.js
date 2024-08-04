const express = require("express");
const connection = require("./config/db");
const userRouter = require("./routes/user.route");
const courseRouter = require("./routes/couese.route");

const PORT = 3030
const Server = express()

Server.use(express.json())
Server.use("/user", userRouter)
Server.use("/course", courseRouter)

Server.listen(PORT,async()=>{
    try{
        await connection();
        console.log(`use port nom ${PORT}`);
    }catch(error){
        console.log(error);
    }
});