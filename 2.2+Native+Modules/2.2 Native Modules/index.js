const fs = require("fs")

charset = "utf-8";
fs.writeFile("email.txt","hello its abhi!!",(err)=>
{
    if (err) throw err;
    console.log("The file has been created");
});
fs.readFile("email.txt","utf-8",(err,data)=>
{
    if (err) throw err;
    console.log(data);
});
