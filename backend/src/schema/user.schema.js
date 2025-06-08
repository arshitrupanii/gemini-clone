import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique: true,
        required : true
    },
    password : {
        type : String,
        required : true,
        minlength: 6
    }
}, {timestamps : true})


const user = mongoose.model("user", userSchema)

export default user;