const { connect } = require("http2");
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/onlie_couse"

const connection = ()=>{
    try{
        mongoose.connect(url);
        console.log("mongodb connection done");
    }
    catch(error){
        console.log("Error in mongodb connection");
    }
}
module.exports = connection