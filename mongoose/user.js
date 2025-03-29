const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    createdAt:Date,
    updatedAt:Date,
    hobbies:[String]
})

const User = mongoose.model("user",userschema)