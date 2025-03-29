import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const d = new Date();
    let day = d.getDay();
    //console.log(day);
    let type  = "a weekday";
    let adv = "its time to work hard";
    if(day == 0 && day == 6){
            type = "its a weekend";
            adv = "enjoy have fun";
    }
    res.render("index.ejs",{
        daytype:type,
        advice:adv,
    });
});
app.listen(port,()=>{
    console.log("server running on "+port);
});