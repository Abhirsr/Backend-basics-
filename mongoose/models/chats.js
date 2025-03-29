const { kMaxLength } = require("buffer");
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        MaxLength:50
    },
    createdAt:{
        type:Date,
        required:true
    },
});

const chats = mongoose.model("chats",chatSchema);


module.exports = chats;