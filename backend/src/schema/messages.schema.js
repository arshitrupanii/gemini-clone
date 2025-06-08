import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    id: {type : String},
    prompt : {type: String},
    response : {type:String}

}, {timestamps: true})

const Message = mongoose.model('Messages', messagesSchema);

export default Message