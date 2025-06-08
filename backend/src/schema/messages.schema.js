import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    user : {type : String, required : true},
    prompt : {type: String},
    ai : {type:String}

}, {timestamps: true})

const Message = mongoose.model('Messages', messagesSchema);

export default Message