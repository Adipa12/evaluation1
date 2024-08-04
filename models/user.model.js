const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    id : String,
    username: String,
    password: String,
    enrolledCourses: String
});
const UserModel = mongoose.model("user",userSchema)

module.exports = UserModel