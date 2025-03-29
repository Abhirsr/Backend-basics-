import express from "express";

const app = express();


app.get("/",(req,res)=>{
    res.send("<h1>bad to see you</h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>ph no: 9032327474</h1>");
}); 

app.listen(3100 , ()=>{
    console.log("your port 3100 is ready");
});