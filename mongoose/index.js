const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path")
const chat2 = require("./models/chats.js")

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));


main().then(()=>{
  console.log("connection successfull");

})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/chats",async(req,res)=>{
  let chats = await chat2.find();
    console.log(chats);
    res.render("index.ejs",{chats})
})

let chat1 = new chat2({
  from:"abhinav",
  to:"priya",
  msg:"send me a pencil",
  createdAt:new Date(),
});
chat1.save().then((res)=>{
  console.log(res)
});


app.get("/",(req,res)=>{
    res.send("root is working");
});

app.get("/update",(req,res)=>{
  res.send("success");
});
app.get("/chats/new",(req,res)=>{
  
})




app.listen(8080,()=>{
    console.log("server on 8080");
});