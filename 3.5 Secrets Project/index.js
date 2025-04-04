//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordgenerator(req,res,next){
    const pass = req.body["password"];
    if (pass == "Administrator"){
        userIsAuthorised = true;
    }
    else{
        userIsAuthorised = false;
    }
    next();
}
app.use(passwordgenerator);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});
app.post("/check",(req,res)=>{
    if(userIsAuthorised){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
        userIsAuthorised = false;
    }
});
app.listen(port,()=>{
    console.log("port is listening: "+port);
});

