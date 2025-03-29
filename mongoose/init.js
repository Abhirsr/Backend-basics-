const mongoose = require('mongoose');
const chat = require("./models/chats.js");
const { matchesGlob } = require('node:path/win32');


main().then(()=>{
  console.log("connection successfull");

})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
  {
    from:"abhi",
    to:"preethi",
    message:"send me some time",
    createdAt:new Date()
  },
  {
    from:"sai",
    to:"pranavi",
    msg:"buy me a coffee",
    createdAt:new Date()
  },
  {
    from:"ravindra",
    to:"siri",
    msg:"send me some money",
    createdAt:new Date()
  },
  {
    from:"zebra",
    to:"sushal",
    msg:"give me a treat",
    createdAt:new Date()
  }
]
chat.insertMany(allchats);


